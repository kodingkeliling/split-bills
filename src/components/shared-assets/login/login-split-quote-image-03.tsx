"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { RatingStars } from "@/components/foundations/rating-stars";


const reviews = [
    {
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects  faster and take on more clients.",
        name: "Lulu Meyers",
        title: "Product Manager, Hourglass",
        company: "Web Design Agency",
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

export const LoginSplitQuoteImage03 = () => {
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
            <div className="relative flex justify-center px-4 py-12 md:items-center md:px-8">
                <div className="flex w-full flex-col gap-8 sm:max-w-90">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <UntitledLogoMinimal className="size-10 lg:size-12" />
                        <div className="flex flex-col gap-2 text-center md:gap-3">
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

            <div className="relative hidden py-6 pr-6 lg:flex">
                <div className="relative flex flex-1 flex-col items-start justify-end overflow-hidden rounded-[20px]">
                    <img src="https://www.untitledui.com/images/portraits/lulu-meyers" className="absolute inset-0 size-full object-cover" alt="Olivia Rhye" />
                    <div className="relative z-10 bg-linear-to-t from-black/40 to-black/0 pt-24">
                        <div className="flex h-max flex-col gap-8 overflow-hidden border-t border-white/30 bg-primary/25 px-8 pt-8 pb-8 backdrop-blur-md">
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
                                        className="flex flex-row justify-between gap-4"
                                    >
                                        <p className="text-xl font-semibold whitespace-nowrap text-white md:text-display-xs"> {reviews[currentReview].name}</p>

                                        <RatingStars className="hidden gap-1 md:flex" starClassName="text-fg-white" />
                                    </motion.div>
                                </AnimatePresence>

                                <div className="flex w-full flex-row gap-3">
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
                                            <p className="text-md font-semibold text-white"> {reviews[currentReview].title}</p>
                                            <p className="text-sm font-medium text-white"> {reviews[currentReview].company}</p>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="flex gap-8">
                                        <button
                                            aria-label="Previous review"
                                            onClick={() => navigate(-1)}
                                            className="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                        >
                                            <ArrowLeft className="size-5 text-fg-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                        </button>
                                        <button
                                            aria-label="Next review"
                                            onClick={() => navigate(1)}
                                            className="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                        >
                                            <ArrowRight className="size-5 text-fg-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
