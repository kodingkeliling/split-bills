"use client";

import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const SignupCardSeparated = () => {
    return (
        <section className="min-h-screen overflow-hidden bg-secondary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-110">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <BackgroundPattern pattern="grid" className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern pattern="grid" size="md" className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                        <UntitledLogoMinimal className="relative z-10 size-12 max-md:hidden" />
                        <UntitledLogoMinimal className="relative z-10 size-10 md:hidden" />
                    </div>
                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Create an account</h1>
                        <p className="text-md text-tertiary">Start your 30-day free trial.</p>
                    </div>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="relative z-10 -mx-4 flex flex-col gap-6 bg-primary px-4 py-8 sm:mx-0 sm:rounded-2xl sm:px-10 sm:shadow-sm"
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

                <div className="z-10 flex justify-center gap-1 text-center">
                    <span className="text-sm text-tertiary">Already have an account?</span>
                    <Button href="#" color="link-color" size="md">
                        Log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
