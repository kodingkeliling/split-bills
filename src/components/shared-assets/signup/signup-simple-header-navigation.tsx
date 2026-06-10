"use client";

import { Fragment } from "react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";


const tabs = [
    { id: "signup", label: "Sign up" },
    { id: "login", label: "Log in" },
];

export const SignupSimpleHeaderNavigation = () => {
    return (
        <Fragment>
            <header className="hidden bg-primary md:block">
                <div className="mx-auto flex h-18 max-w-container items-center justify-between px-8">
                    <UntitledLogo />
                    <div className="flex items-center gap-1">
                        <span className="text-md text-tertiary">Already have an account?</span>
                        <Button href="#" color="link-color" size="lg">
                            Log in
                        </Button>
                    </div>
                </div>
            </header>
            <section className="min-h-screen bg-primary px-4 py-12 md:px-8 md:pt-24">
                <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <UntitledLogoMinimal className="size-10 md:hidden" />

                        <div className="flex flex-col gap-2 md:gap-3">
                            <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Create an account</h1>
                            <p className="text-md text-tertiary">Start your 30-day free trial.</p>
                        </div>
                        <Tabs className="z-10 w-full">
                            <TabList size="sm" fullWidth type="button-border" items={tabs} />
                        </Tabs>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex flex-col gap-5 md:gap-6"
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

                    <div className="flex justify-center text-center">
                        <Button href="#" color="link-color" size="md">
                            Continue with SAML SSO
                        </Button>
                    </div>
                    <div className="z-10 flex justify-center gap-1 text-center md:hidden">
                        <span className="text-sm text-tertiary">Already have an account?</span>
                        <Button href="#" color="link-color" size="md">
                            Log in
                        </Button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
