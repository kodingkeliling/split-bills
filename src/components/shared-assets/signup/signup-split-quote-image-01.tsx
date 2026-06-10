"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { RatingStars } from "@/components/foundations/rating-stars";


const reviews = [
    {
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it. It's incredible.",
        name: "Caitlyn King",
        title: "Lead Designer, Layers",
        company: "Web Development Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/girl.webp",
    },
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Felicity Pierre",
        title: "Head of Design, Layers",
        company: "UX Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/podcast-girl.webp",
    },
    {
        quote: "We've really sped up our workflow using Untitled and haven't looked back. We're so happy!",
        name: "Fleur Cook",
        title: "PM, Hourglass",
        company: "Web Design Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/girl.webp",
    },
];

const variants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 500 : -500,
        opacity: 0,
    }),
    center: {
        x: 0,
        zIndex: 1,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 500 : -500,
        zIndex: 0,
        opacity: 0,
    }),
};
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;

    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const transition: Transition = {
    type: "tween",
    duration: 0.8,
    ease: [0.8, 0, 0.2, 1],
};

export const SignupSplitQuoteImage01 = () => {
    const [{ page, direction, count }, setPage] = useState({
        page: 0,
        direction: 0,
        count: 0,
    });

    const currentReview = wrap(0, reviews.length, page);
    const navigate = (direction: number) => {
        setPage({
            page: page + direction,
            direction,
            count: count + 1,
        });
    };

    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="flex flex-col bg-primary">
                <header className="hidden px-8 pt-8 md:block">
                    <UntitledLogo />
                </header>
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8 md:pb-28">
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

            <div className="relative hidden flex-1 flex-col justify-end overflow-hidden lg:flex">
                <img src="https://www.untitledui.com/images/portraits/caitlyn-king" className="absolute inset-0 size-full object-cover" alt="Olivia Rhye" />

                <div className="z-10 bg-linear-to-t from-black/40 to-black/0 p-8 pt-24">
                    <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-alpha-white/30 px-5 py-6 ring-1 ring-alpha-white/25 backdrop-blur-md ring-inset">
                        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                            <motion.q
                                key={count}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    ...transition,
                                    delay: 0.02,
                                }}
                                className="text-display-sm font-semibold text-balance text-white"
                            >
                                {reviews[currentReview].quote}
                            </motion.q>
                        </AnimatePresence>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row items-start justify-between gap-4">
                                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                    <motion.p
                                        key={count}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            ...transition,
                                            delay: 0.04,
                                        }}
                                        className="text-xl font-semibold whitespace-nowrap text-white md:text-display-xs"
                                    >
                                        {reviews[currentReview].name}
                                    </motion.p>
                                </AnimatePresence>

                                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                    <motion.div
                                        key={count}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            ...transition,
                                            delay: 0.04,
                                        }}
                                        aria-hidden="true"
                                        className="hidden md:flex"
                                    >
                                        <RatingStars className="gap-1" starClassName="text-fg-white" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-row justify-between gap-3">
                                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                    <motion.div
                                        key={count}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            ...transition,
                                            delay: 0.05,
                                        }}
                                        className="flex w-full flex-col gap-1"
                                    >
                                        <p className="text-md font-semibold whitespace-nowrap text-white">{reviews[currentReview].title}</p>
                                        <p className="text-sm font-medium whitespace-nowrap text-white">{reviews[currentReview].company}</p>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="flex gap-8">
                                    <button
                                        aria-label="Previous review"
                                        onClick={() => navigate(-1)}
                                        className="group flex size-8 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                    >
                                        <ArrowLeft className="size-5 text-fg-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                    </button>
                                    <button
                                        aria-label="Next review"
                                        onClick={() => navigate(1)}
                                        className="group flex size-8 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                    >
                                        <ArrowRight className="size-5 text-fg-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
