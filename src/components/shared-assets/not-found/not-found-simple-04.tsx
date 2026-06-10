"use client";

import { ArrowLeft, ArrowRight, BookOpen01, CodeSquare02, MessageChatCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const NotFoundSimple04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:gap-24 md:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-primary-600 text-md font-semibold">404 error</span>

                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">We lost this page</h1>
                        </div>
                        <p className="text-lg text-tertiary md:text-xl">
                            We searched high and low, but couldn't find what you're looking for. <br className="max-md:hidden" /> Let's find a better place for
                            you to go.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button iconLeading={ArrowLeft} color="secondary" size="xl">
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>

                <div className="mx-auto w-full">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
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
                                title: "Chat to us",
                                subtitle: "Can't find what you're looking for?",
                                icon: MessageChatCircle,
                                cta: "Chat to our team",
                                href: "#",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col gap-8 bg-secondary p-5 text-left md:gap-12 md:p-6">
                                <item.icon className="size-6 text-icon-fg-brand" />

                                <div className="flex flex-col items-start gap-4 md:gap-5">
                                    <div className="flex flex-col gap-1 md:gap-2">
                                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                        <p className="text-md text-tertiary">{item.subtitle}</p>
                                    </div>
                                    <Button color="link-color" size="lg" href={item.href} iconTrailing={<ArrowRight className="size-5" />}>
                                        {item.cta}
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
