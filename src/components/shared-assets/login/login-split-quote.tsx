"use client";

import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { RatingStars } from "@/components/foundations/rating-stars";
import { CompanyIcon } from "@/components/shared-assets/illustrations/company-icon";

export const LoginSplitQuote = () => {
    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="relative hidden items-center justify-between overflow-hidden bg-secondary lg:flex">
                <header className="absolute top-8 left-8">
                    <UntitledLogo className="max-md:hidden" />
                    <UntitledLogoMinimal className="md:hidden" />
                </header>

                <figure className="flex flex-col gap-8 px-20 text-center">
                    <blockquote className="text-display-sm font-medium text-primary">
                        We've been using Untitled to kick start every new project and can't imagine working without it.
                    </blockquote>

                    <figcaption className="flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative flex">
                                <Avatar src="https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80" alt="Kelly Williams" size="2xl" />
                                <div className="absolute -right-[3.667px] -bottom-[3.667px] flex items-center justify-center rounded-full">
                                    <CompanyIcon />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold text-primary">Pippa Wilkinson</p>
                                <cite className="text-sm font-medium text-tertiary not-italic">Head of Design, Layers</cite>
                            </div>
                        </div>

                        <RatingStars className="gap-1" />
                    </figcaption>
                </figure>

                <footer className="absolute bottom-8 left-8">
                    <p className="text-sm text-tertiary">© Untitled UI 2077</p>
                </footer>
            </div>

            <div className="flex flex-col bg-primary">
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
                    <div className="flex w-full flex-col gap-8 sm:max-w-90">
                        <div className="flex flex-col gap-6">
                            <UntitledLogoMinimal className="size-10 lg:hidden" />

                            <div className="flex flex-col gap-2 md:gap-3">
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
            </div>
        </section>
    );
};
