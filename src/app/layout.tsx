import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { BillProvider } from "@/providers/bill-provider";
import { HistoryProvider } from "@/providers/history-provider";
import { Toaster } from "@/components/application/notifications/toaster";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Koding Keliling — Split Bill",
    description: "Alat bantu bagi tagihan makan bareng teman-teman.",
    icons: {
        icon: "/logo-dark.webp",
    },
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>
                        <HistoryProvider>
                            <BillProvider>{children}</BillProvider>
                            <Toaster />
                        </HistoryProvider>
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
