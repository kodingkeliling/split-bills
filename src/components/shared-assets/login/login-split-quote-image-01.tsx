"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { Transition } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";


const reviews = [
    {
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        company: "Layers",
        category: "Web Development Agency",
        author: {
            name: "Amélie Laurent",
            title: "Lead Designer, Layers",
            avatarUrl: "https://www.untitledui.com/images/portraits/lana-steiner",
        },
    },
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company: "Hourglass",
        category: "Web Design Agency",
        author: {
            name: "Lulu Meyers",
            title: "PM, Hourglass",
            avatarUrl: "https://www.untitledui.com/images/avatars/lulu-meyers?fm=webp&q=80",
        },
    },
    {
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        company: "Sisyphus",
        category: "Web Design Agency",
        author: {
            name: "Caitlyn King",
            title: "Data Engineer, Sisyphus",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
];

const transition: Transition = {
    type: "spring",
    duration: 0.8,
};

export const LoginSplitQuoteImage01 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    return (
        <section className="grid min-h-screen bg-primary lg:grid-cols-2">
            <div className="relative flex w-full flex-1 flex-col bg-primary">
                <header className="absolute top-0 left-0 hidden p-8 lg:block">
                    <UntitledLogo />
                </header>
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8 md:py-0">
                    <div className="flex w-full flex-col gap-8 sm:max-w-90">
                        <div className="flex flex-col gap-6">
                            <UntitledLogoMinimal className="size-10 lg:hidden" />

                            <div className="flex flex-col gap-2 lg:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Welcome back</h1>
                                <p className="text-md text-tertiary">Welcome back! Please enter your details.</p>
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
                                <Input isRequired hideRequiredIndicator label="Email" type="email" name="email" placeholder="Enter your email" size="md" />
                                <Input isRequired hideRequiredIndicator label="Password" type="password" name="password" size="md" placeholder="••••••••" />
                            </div>

                            <div className="flex items-center">
                                <Checkbox label="Remember for 30 days" name="remember" />

                                <Button color="link-color" size="md" href="#" className="ml-auto">
                                    Forgot password
                                </Button>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Sign in
                                </Button>
                                <SocialButton social="google" theme="color">
                                    Sign in with Google
                                </SocialButton>
                            </div>
                        </Form>

                        <div className="flex justify-center gap-1 text-center">
                            <span className="text-sm text-tertiary">Don't have an account?</span>
                            <Button href="#" color="link-color" size="md">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>

                <footer className="absolute bottom-0 left-0 hidden p-8 pt-11 lg:block">
                    <p className="text-sm text-tertiary">© Untitled UI 2077</p>
                </footer>
            </div>

            <figure className="relative hidden flex-1 flex-col items-start justify-end gap-6 overflow-hidden rounded-l-[80px] p-14 lg:flex">
                <img
                    src="https://www.untitledui.com/images/portraits/amelie-laurent"
                    className="absolute inset-0 size-full rounded-l-[80px] object-cover brightness-95"
                    alt="Image by Good Faces at Unsplash.com"
                />

                {/* Background image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 from-20% to-transparent to-90%" />

                <AnimatePresence initial={false} mode="popLayout">
                    <motion.q
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
                                delay: 0.4,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            y: 12,
                            transition: {
                                ...transition,
                                delay: 0.1,
                            },
                        }}
                        className="relative z-10 text-display-md font-medium text-white will-change-transform"
                    >
                        {reviews[currentReviewIndex].quote}
                    </motion.q>
                </AnimatePresence>

                <figcaption className="relative z-10 flex w-full flex-col gap-3">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.p
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
                                    delay: 0.35,
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
                            className="text-xl font-semibold text-white will-change-transform md:text-display-xs"
                        >
                            {reviews[currentReviewIndex].author.name}
                        </motion.p>
                    </AnimatePresence>
                    <div className="flex w-full gap-3">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
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
                                className="flex w-full flex-col gap-0.5 will-change-transform"
                            >
                                <p className="text-lg font-semibold text-white not-italic">{reviews[currentReviewIndex].author.title}</p>
                                <p className="text-md font-medium text-white not-italic">{reviews[currentReviewIndex].category}</p>
                            </motion.div>
                        </AnimatePresence>
                        <div className="flex gap-4 md:gap-8">
                            <button
                                onClick={() => setCurrentReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                                aria-label="Previous review"
                                className="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                            >
                                <ArrowLeft className="size-5 text-fg-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                            </button>
                            <button
                                onClick={() => setCurrentReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
                                aria-label="Next review"
                                className="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                            >
                                <ArrowRight className="size-5 text-fg-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                            </button>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </section>
    );
};
