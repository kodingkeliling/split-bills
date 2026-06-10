"use client";

import { ContentDivider } from "@/components/application/content-divider/content-divider";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const LoginSimpleSocialLogins = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="relative z-10 mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <UntitledLogoMinimal className="size-12 max-md:hidden" />
                        <UntitledLogoMinimal className="size-10 md:hidden" />
                        <BackgroundPattern pattern="circle" className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern pattern="circle" size="md" className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                    </div>
                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Log in to your account</h1>
                        <p className="text-md text-tertiary">Welcome back! Please enter your details.</p>
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
                    <div className="flex flex-col gap-4">
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="md" />

                        <Button type="submit" size="lg">
                            Continue with email
                        </Button>
                    </div>

                    <ContentDivider type="single-line">
                        <span className="text-sm font-medium text-tertiary">OR</span>
                    </ContentDivider>

                    <div className="flex flex-col gap-3">
                        <SocialButton social="google" theme="color">
                            Continue with Google
                        </SocialButton>
                        <SocialButton social="facebook" theme="color">
                            Continue with Facebook
                        </SocialButton>
                        <SocialButton social="apple" theme="color">
                            Continue with Apple
                        </SocialButton>
                    </div>
                </Form>

                <div className="z-10 flex justify-center gap-1 text-center">
                    <span className="text-sm text-tertiary">Don't have an account?</span>
                    <Button color="link-color" size="md" href="#">
                        Sign up
                    </Button>
                </div>
            </div>
        </section>
    );
};
