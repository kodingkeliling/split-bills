"use client";

import { Fragment } from "react";
import { ArrowLeft, ArrowRight, BookOpen01, Cube01, MessageChatCircle, SearchLg } from "@untitledui/icons";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const NotFoundSimple06 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-8 px-4 md:gap-16 md:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:gap-12">
                    <div className="flex flex-col items-center gap-4 md:gap-6">
                        <div className="flex flex-col justify-center gap-3">
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-max">
                                    <span className="relative z-10">
                                        <BadgeWithDot type="modern" color="brand" size="lg">
                                            404 error
                                        </BadgeWithDot>
                                    </span>

                                    <BackgroundPattern
                                        pattern="grid"
                                        size="lg"
                                        className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                                    />
                                    <BackgroundPattern
                                        pattern="grid"
                                        size="md"
                                        className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                                    />
                                </div>

                                <h1 className="z-10 hidden text-display-md font-semibold text-primary md:block md:text-display-lg lg:text-display-xl">
                                    We can't find this page
                                </h1>
                                <h1 className="z-10 text-display-md font-semibold text-primary md:hidden md:text-display-lg lg:text-display-xl">
                                    We lost this page
                                </h1>
                            </div>
                        </div>
                        <p className="z-10 text-lg text-tertiary md:text-xl">The page you are looking for doesn't exist or has been moved.</p>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="z-10 flex w-full flex-col gap-4 md:hidden"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="search"
                            type="search"
                            inputClassName="w-full md:py-3!"
                            placeholder="Search our site"
                            icon={SearchLg}
                        />
                        <Button type="submit" size="lg" className="w-full md:hidden" color="secondary">
                            Search
                        </Button>
                        <Button type="submit" size="xl" className="w-max max-md:hidden" color="secondary">
                            Search
                        </Button>
                    </Form>

                    <div className="z-10 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button iconLeading={ArrowLeft} color="secondary" size="xl">
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>

                <div className="mx-auto flex w-full items-center justify-center">
                    <ul className="grid w-full grid-cols-1 gap-5 md:max-w-140">
                        {[
                            {
                                title: "Documentation",
                                subtitle: "Dive in to learn all about our product.",
                                icon: Cube01,
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
                            <Fragment key={item.title}>
                                <hr className="w-full border-t border-secondary" />
                                <li className="flex flex-col gap-4 text-left md:flex-row md:gap-5">
                                    <FeaturedIcon color="gray" size="lg" theme="modern" className="hidden md:flex" icon={item.icon} />
                                    <FeaturedIcon color="gray" size="md" theme="modern" className="md:hidden" icon={item.icon} />

                                    <div className="flex w-full flex-row items-start justify-between gap-2 md:gap-5">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                            <p className="text-md text-tertiary">{item.subtitle}</p>
                                        </div>
                                        <ArrowRight className="size-6 text-fg-quaternary" />
                                    </div>
                                </li>
                                <hr className="hidden w-full border-t border-secondary last:flex" />
                            </Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
