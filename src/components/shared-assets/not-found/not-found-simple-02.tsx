"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

export const NotFoundSimple02 = () => {
    return (
        <section className="flex min-h-screen items-start justify-center bg-primary py-16 md:items-center md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div>
                                <BadgeWithDot type="modern" color="brand" size="lg">
                                    404 error
                                </BadgeWithDot>
                            </div>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Page not found</h1>
                        </div>
                        <p className="text-lg text-tertiary md:text-xl">Sorry, the page you are looking for doesn't exist.</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>

                    <ul className="flex flex-col gap-6">
                        {[
                            {
                                title: "Documentation",
                                href: "#",
                                subtitle: "Dive in to learn all about our product.",
                            },
                            {
                                title: "Our blog",
                                href: "#",
                                subtitle: "Read the latest posts on our blog.",
                            },
                            {
                                title: "Chat to support",
                                href: "#",
                                subtitle: "Our friendly team is here to help.",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col items-start gap-1">
                                <Button color="link-color" size="xl" href={item.href} iconTrailing={ArrowRight}>
                                    {item.title}
                                </Button>
                                <p className="text-md text-tertiary">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
