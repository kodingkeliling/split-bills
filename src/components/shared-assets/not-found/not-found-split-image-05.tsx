"use client";

import { ArrowRight, BookOpen01, CodeSquare02, MessageChatCircle, SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

export const NotFoundSplitImage05 = () => {
    return (
        <section className="grid min-h-screen flex-1 bg-primary py-16 md:py-24 lg:px-20">
            <div className="flex h-full flex-col items-center justify-center gap-16 px-4 md:px-8 lg:flex-row lg:gap-8">
                <div className="flex w-full max-w-140 flex-col items-start gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="text-md font-semibold text-brand-secondary">404 error</p>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">We lost this page</h1>
                        </div>
                        <p className="max-w-lg text-lg text-tertiary md:text-xl">Sorry, the page you are looking for doesn't exist.</p>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex h-max w-full max-w-120 flex-col gap-4 self-stretch md:flex-row md:self-auto"
                    >
                        <Input isRequired name="search" type="search" placeholder="Search our site" size="md" icon={SearchLg} inputClassName="md:py-3!" />
                        <Button type="submit" size="xl">
                            Search
                        </Button>
                    </Form>
                    <ul className="grid w-full grid-cols-1 gap-6">
                        {[
                            {
                                title: "Documentation",
                                subtitle: "Dive in to learn all about our product.",
                                icon: CodeSquare02,
                                cta: "Start learning",
                                href: "#",
                            },
                            {
                                title: "Our blog",
                                subtitle: "Read the latest posts on our blog.",
                                icon: BookOpen01,
                                cta: "View latest posts",
                                href: "#",
                            },
                            {
                                title: "Chat to support",
                                subtitle: "Our friendly team is here to help.",
                                icon: MessageChatCircle,
                                cta: "Chat to our team",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col items-start gap-1 text-left">
                                <Button size="xl" color="link-color" iconTrailing={ArrowRight}>
                                    {item.title}
                                </Button>
                                <p className="text-md text-tertiary">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="size-full flex-1">
                    <div className="relative size-full overflow-hidden">
                        <img
                            className="h-70 w-full object-cover object-center md:h-110 lg:absolute lg:inset-0 lg:h-full"
                            src="https://www.untitledui.com/marketing/spirals.webp"
                            alt="Image by Daniel at Unsplash.com"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
