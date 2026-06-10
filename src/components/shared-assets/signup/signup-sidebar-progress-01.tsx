"use client";

import { useState } from "react";
import { Key01, Mail01, Passcode, Stars02, User01, UsersPlus } from "@untitledui/icons";
import { PaginationDot } from "@/components/application/pagination/pagination-dot";
import { Progress } from "@/components/application/progress-steps/progress-steps";
import type { ProgressFeaturedIconType } from "@/components/application/progress-steps/progress-types";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";


const steps = [
    {
        title: "Your details",
        description: "Please provide your name and email",
        status: "complete",
        icon: User01,
    },
    {
        title: "Choose a password",
        description: "Choose a secure password",
        status: "current",
        icon: Passcode,
    },
    {
        title: "Invite your team",
        description: "Start collaborating with your team",
        status: "incomplete",
        icon: UsersPlus,
    },
    {
        title: "Add your socials",
        description: "Share posts to your social accounts",
        status: "incomplete",
        icon: Stars02,
    },
] as ProgressFeaturedIconType[];

export const SignupSidebarProgress01 = () => {
    const [password, setPassword] = useState("");

    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-[440px_1fr]">
            <div className="hidden max-w-md min-w-100 flex-1 flex-col justify-between gap-20 bg-secondary lg:flex">
                <div className="flex flex-col gap-20 px-8 pt-8">
                    <UntitledLogo />
                    <div className="pr-8">
                        <Progress.IconsWithText items={steps} type="featured-icon" size="md" />
                    </div>
                </div>
                <footer className="mt-auto flex justify-between px-8 pt-11 pb-8">
                    <p className="text-sm text-tertiary">© Untitled UI 2077</p>

                    <a href="mailto:help@untitledui.com" className="flex items-center gap-2 text-sm text-tertiary">
                        <Mail01 className="size-4 text-fg-quaternary" />
                        help@untitledui.com
                    </a>
                </footer>
            </div>

            <div className="flex h-full w-full flex-1 overflow-hidden py-12 md:pt-40 md:pb-24">
                <div className="flex h-full w-full flex-col items-center gap-8 px-4 md:grow-0 md:gap-20 md:px-8">
                    <div className="flex w-full flex-col gap-8 sm:max-w-90">
                        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
                            <div className="relative">
                                <FeaturedIcon color="gray" theme="modern" size="xl" className="relative z-10">
                                    <Key01 className="size-7" />
                                </FeaturedIcon>
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

                            <div className="z-10 flex flex-col gap-2 md:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Choose a password</h1>
                                <p className="text-md text-tertiary">Must be at least 8 characters.</p>
                            </div>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="z-10 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-5">
                                <Input isRequired type="password" name="password" size="md" placeholder="Choose a password" onChange={setPassword} />
                                <Input
                                    isRequired
                                    type="password"
                                    name="password_confirm"
                                    size="md"
                                    placeholder="Confirm password"
                                    validate={(value) => value === password || "Passwords do not match"}
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Continue
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="mt-auto md:mt-0">
                        <PaginationDot page={2} total={4} size="lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};
