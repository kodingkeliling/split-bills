"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Mail01 } from "@untitledui/icons";
import type { Transition } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { PaginationDot } from "@/components/application/pagination/pagination-dot";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { StarIcon } from "@/components/foundations/rating-stars";


const reviews = [
    {
        id: "review-01",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features much faster.",
        company: {
            name: "Sisyphus",
            logoUrl: "https://www.untitledui.com/logos/minimal/color/sisyphus.svg",
        },
        author: {
            name: "Lori Bryson",
            title: "Product Designer, Sisyphus",
            avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
        },
    },
    {
        id: "review-02",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company: {
            name: "Layers",
            logoUrl: "https://www.untitledui.com/logos/minimal/color/layers.svg",
        },
        author: {
            name: "Caitlyn King",
            title: "Head of Design, Layers",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
    {
        id: "review-03",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        company: {
            name: "Hourglass",
            logoUrl: "https://www.untitledui.com/logos/minimal/color/hourglass.svg",
        },
        author: {
            name: "Amélie Laurent",
            title: "Product Manager, Hourglass",
            avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
        },
    },
    {
        id: "review-04",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company: {
            name: "Quotient",
            logoUrl: "https://www.untitledui.com/logos/minimal/color/quotient.svg",
        },
        author: {
            name: "Caitlyn King",
            title: "Head of Design, Quotient",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
];

const transition: Transition = {
    type: "spring",
    duration: 0.8,
};

export const SignupSplitQuoteCarousel = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(1);

    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="relative hidden flex-1 flex-col items-center justify-center self-stretch overflow-hidden bg-secondary lg:flex">
                <header className="absolute top-8 left-8">
                    <UntitledLogo />
                </header>

                <figure className="flex flex-col items-center gap-8 px-20 text-center">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.div aria-hidden="true" className="flex gap-1">
                            {Array.from({
                                length: 5,
                            }).map((_, index) => (
                                <motion.div
                                    key={`${currentReviewIndex}-${index}`}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        y: 6,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        transition: {
                                            ...transition,
                                            delay: 0.5 + index * 0.1,
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        y: 6,
                                        transition: {
                                            ...transition,
                                            delay: 0.12,
                                        },
                                    }}
                                >
                                    <StarIcon />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.blockquote
                            key={currentReviewIndex + "-quote"}
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                y: 12,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    ...transition,
                                    delay: 0.4,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.98,
                                y: 12,
                                transition: {
                                    ...transition,
                                    delay: 0.06,
                                },
                            }}
                            className="origin-bottom text-display-sm font-medium text-balance text-primary will-change-transform"
                        >
                            {reviews[currentReviewIndex].quote}
                        </motion.blockquote>

                        <motion.figcaption
                            key={currentReviewIndex}
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                y: 12,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    ...transition,
                                    delay: 0.3,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.98,
                                y: 12,
                                transition,
                            }}
                            className="flex origin-bottom flex-col items-center gap-8 will-change-transform"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative inline-block">
                                    <img
                                        src={reviews[currentReviewIndex].author.avatarUrl}
                                        className="size-16 rounded-full object-cover"
                                        alt={reviews[currentReviewIndex].author.name}
                                    />
                                    <img
                                        src={reviews[currentReviewIndex].company.logoUrl}
                                        className="absolute -right-0.5 -bottom-0.5 size-5 rounded-full bg-primary object-cover ring-2 ring-bg-primary"
                                        alt={reviews[currentReviewIndex].company.name}
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-md font-semibold whitespace-nowrap text-primary">{reviews[currentReviewIndex].author.name}</p>
                                    <cite className="text-sm font-medium whitespace-nowrap text-tertiary not-italic">
                                        {reviews[currentReviewIndex].author.title}
                                    </cite>
                                </div>
                            </div>
                        </motion.figcaption>

                        <div className="flex items-center justify-center gap-16">
                            <Button
                                onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                                iconLeading={ChevronLeft}
                                color="tertiary"
                                size="sm"
                            />

                            <PaginationDot
                                page={currentReviewIndex + 1}
                                total={reviews.length}
                                onPageChange={(index) => setCurrentReviewIndex(index - 1)}
                                size="lg"
                            />

                            <Button
                                onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)}
                                iconLeading={ChevronRight}
                                color="tertiary"
                                size="sm"
                            />
                        </div>
                    </AnimatePresence>
                </figure>

                <footer className="absolute inset-x-0 bottom-0 hidden justify-between px-8 pb-8 lg:flex">
                    <p className="text-sm text-tertiary">© Untitled UI 2077</p>

                    <a href="mailto:help@untitledui.com" className="flex items-center gap-2 text-sm text-tertiary">
                        <Mail01 className="size-4 text-fg-quaternary" />
                        help@untitledui.com
                    </a>
                </footer>
            </div>

            <div className="flex flex-col bg-primary">
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
                    <div className="flex w-full flex-col gap-8 sm:max-w-90">
                        <div className="flex flex-col gap-6">
                            <UntitledLogoMinimal className="size-10 lg:hidden" />

                            <div className="flex flex-col gap-2 md:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Sign up</h1>
                                <p className="text-md text-tertiary">Start your 30-day free trial.</p>
                            </div>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-5">
                                <Input isRequired hideRequiredIndicator label="Name" name="name" placeholder="Enter your name" size="md" />
                                <Input isRequired hideRequiredIndicator label="Email" type="email" name="email" placeholder="Enter your email" size="md" />
                                <Input
                                    isRequired
                                    hideRequiredIndicator
                                    label="Password"
                                    type="password"
                                    name="password"
                                    size="md"
                                    placeholder="Create a password"
                                    hint="Must be at least 8 characters."
                                    minLength={8}
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Get started
                                </Button>
                                <SocialButton social="google" theme="color">
                                    Sign up with Google
                                </SocialButton>
                            </div>
                        </Form>

                        <div className="flex justify-center gap-1 text-center">
                            <span className="text-sm text-tertiary">Already have an account?</span>
                            <Button href="#" color="link-color" size="md">
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
