"use client";

import { Fragment } from "react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";


const tabs = [
    { id: "signup", label: "Sign up" },
    { id: "login", label: "Log in" },
];

export const LoginSimpleHeaderNavigation = () => {
    return (
        <Fragment>
            <header className="hidden bg-primary md:block">
                <div className="mx-auto flex h-18 max-w-container items-center justify-between px-8">
                    <UntitledLogo />

                    <div className="flex items-center gap-1">
                        <span className="text-md text-tertiary">Don't have an account?</span>
                        <Button href="#" color="link-color" size="lg">
                            Sign up
                        </Button>
                    </div>
                </div>
            </header>
            <section className="min-h-screen bg-primary px-4 py-12 md:px-8 md:pt-24">
                <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <UntitledLogoMinimal className="size-10 md:hidden" />
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Log in to your account</h1>
                            <p className="text-md text-tertiary">Welcome back! Please enter your details.</p>
                        </div>
                        <Tabs defaultSelectedKey="login" className="w-full">
                            <TabList fullWidth size="sm" type="button-border" items={tabs} />
                        </Tabs>
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

                    <div className="flex justify-center text-center">
                        <Button href="#" color="link-color" size="md" className="hidden md:flex">
                            Continue with SAML SSO
                        </Button>

                        <div className="flex gap-1 md:hidden">
                            <span className="text-sm text-tertiary">Don't have an account?</span>
                            <Button href="#" color="link-color" size="md">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
