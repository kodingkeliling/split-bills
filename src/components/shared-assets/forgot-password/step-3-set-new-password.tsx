"use client";

import { useState } from "react";
import { ArrowLeft, Lock01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { cx } from "@/utils/cx";

export const Step3SetNewPassword = () => {
    const [password, setPassword] = useState("");

    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:gap-24 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full max-w-90 flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <FeaturedIcon color="gray" className="z-10" theme="modern" size="xl">
                            <Lock01 className="size-7" />
                        </FeaturedIcon>
                        <BackgroundPattern size="lg" pattern="grid" className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern size="md" pattern="grid" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                    </div>

                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Set new password</h1>
                        <p className="text-md text-tertiary">Your new password must be different to previously used passwords.</p>
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
                        <Input
                            isRequired
                            hideRequiredIndicator
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            size="md"
                            onChange={setPassword}
                            minLength={8}
                            pattern='.*[!@#$%^&*(),.?\":{}|<>].*'
                        />
                        <Input
                            isRequired
                            hideRequiredIndicator
                            label="Confirm password"
                            type="password"
                            name="password_confirm"
                            placeholder="••••••••"
                            size="md"
                            validate={(value) => value === password || "Passwords do not match"}
                        />
                        <div className="flex flex-col gap-3">
                            <span className="flex gap-2">
                                <div
                                    className={cx(
                                        "flex size-5 items-center justify-center rounded-full bg-fg-disabled_subtle text-fg-white transition duration-150 ease-in-out",
                                        password.length >= 8 ? "bg-fg-success-primary" : "",
                                    )}
                                >
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path
                                            d="M1.25 4L3.75 6.5L8.75 1.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm text-tertiary">Must be at least 8 characters</p>
                            </span>
                            <span className="flex gap-2">
                                <div
                                    className={cx(
                                        "flex size-5 items-center justify-center rounded-full bg-fg-disabled_subtle text-fg-white transition duration-150 ease-in-out",
                                        password.match(/[!@#$%^&*(),.?":{}|<>]/) ? "bg-fg-success-primary" : "",
                                    )}
                                >
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path
                                            d="M1.25 4L3.75 6.5L8.75 1.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm text-tertiary">Must contain one special character</p>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg">
                            Reset password
                        </Button>
                    </div>
                </Form>

                <div className="z-10 flex justify-center gap-1 text-center">
                    <Button size="md" color="link-gray" href="#" className="mx-auto" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
