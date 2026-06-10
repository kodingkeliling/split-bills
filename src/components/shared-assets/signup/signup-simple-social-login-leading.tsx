"use client";

import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const SignupSimpleSocialLoginLeading = () => {
    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <BackgroundPattern pattern="grid" className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern pattern="grid" size="md" className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                        <UntitledLogoMinimal className="relative z-10 size-12 max-md:hidden" />
                        <UntitledLogoMinimal className="relative z-10 size-10 md:hidden" />
                    </div>
                    <h1 className="z-10 text-display-xs font-semibold text-primary md:text-display-sm">Create an account</h1>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="z-10 flex flex-col gap-6"
                >
                    <div className="flex flex-col">
                        <SocialButton social="google" theme="color">
                            Sign up with Google
                        </SocialButton>
                    </div>

                    <div className="mb-2 h-px w-full border-t border-secondary md:mb-0"></div>

                    <div className="flex flex-col gap-4">
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="md" />

                        <Button type="submit" size="lg">
                            Get started
                        </Button>
                    </div>
                </Form>

                <div className="z-10 flex justify-center text-center">
                    <Button href="#" color="link-color" size="md">
                        Continue with SAML SSO
                    </Button>
                </div>
            </div>
        </section>
    );
};
