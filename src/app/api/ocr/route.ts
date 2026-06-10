import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || '',
});

export async function POST(req: NextRequest) {
    try {
        if (!process.env.GROQ_API_KEY) {
            throw new Error('GROQ_API_KEY is missing in environment variables');
        }

        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Convert file to base64
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Data = buffer.toString('base64');
        const mimeType = file.type || 'image/jpeg';

        const prompt = `You are an expert at reading Indonesian restaurant receipts.
Extract the bill data from this receipt image and return ONLY a valid JSON object.
Do NOT include any markdown formatting, code blocks, or explanatory text. Just the raw JSON string.

The JSON must have this exact structure:
{
  "items": [ { "name": string, "quantity": number, "price": number } ],
  "tax": number,
  "serviceCharge": number,
  "subtotal": number,
  "total": number
}

Rules:
1. Indonesian prices use dots as thousand separators: "180.000" = 180000. Convert to plain integers.
2. If quantity is missing, default to 1.
3. EXCLUDE items with price 0 (e.g. free drinks).
4. "tax" comes from "Pajak Restoran", "PPN", or "Tax" lines.
5. "serviceCharge" comes from "Biaya Layanan" or "Service Charge" lines.
6. "subtotal" is before tax/service. "total" is the final amount.
7. Only real purchased items in "items" — exclude tax, service, subtotal, cash rows.
8. If you cannot find tax or service charge, set them to 0.
9. Ensure all numeric values are integers.`;

        const response = await groq.chat.completions.create({
            model: 'llama-3.2-11b-vision-preview',
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: prompt,
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:${mimeType};base64,${base64Data}`,
                            },
                        },
                    ],
                },
            ],
            temperature: 0.1,
            max_tokens: 1024,
        });

        const text = response.choices[0]?.message?.content || '';
        // More aggressive cleanup for JSON string
        let jsonString = text.trim();
        if (jsonString.includes('```')) {
            const match = jsonString.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            if (match) {
                jsonString = match[1];
            }
        }
        jsonString = jsonString.trim();

        try {
            const parsedData = JSON.parse(jsonString);
            // Expand items with quantity > 1 into individual items
            if (parsedData.items) {
                const expandedItems: any[] = [];
                let globalIdx = 0;
                for (const item of parsedData.items) {
                    const qty = item.quantity || 1;
                    if (qty > 1) {
                        for (let i = 1; i <= qty; i++) {
                            expandedItems.push({
                                id: `item-${globalIdx++}`,
                                name: `${item.name} (${i})`,
                                price: item.price,
                                quantity: 1,
                                assignedTo: [],
                            });
                        }
                    } else {
                        expandedItems.push({
                            ...item,
                            id: `item-${globalIdx++}`,
                            quantity: 1,
                            assignedTo: [],
                        });
                    }
                }
                parsedData.items = expandedItems;
            }
            return NextResponse.json(parsedData);
        } catch (e) {
            console.error('Failed to parse Groq JSON response:', text);
            return NextResponse.json({ error: 'Gagal memproses data struk. Pastikan foto terlihat jelas.' }, { status: 500 });
        }
    } catch (error: any) {
        console.error('OCR Error:', error);
        return NextResponse.json({ error: error.message || 'Gagal memproses struk' }, { status: 500 });
    }
}
