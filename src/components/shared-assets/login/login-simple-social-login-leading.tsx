"use client";

import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const LoginSimpleSocialLoginLeading = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <UntitledLogoMinimal className="size-12 max-md:hidden" />
                        <UntitledLogoMinimal className="size-10 md:hidden" />
                        <BackgroundPattern pattern="square" className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern pattern="square" size="md" className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                    </div>

                    <h1 className="z-10 text-display-xs font-semibold text-primary md:text-display-sm">Log in to your account</h1>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="z-10 flex flex-col gap-6"
                >
                    <SocialButton social="google" theme="color">
                        Continue with Google
                    </SocialButton>

                    <div className="h-px w-full border-t border-secondary"></div>

                    <div className="flex flex-col gap-4">
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="md" />

                        <Button type="submit" size="lg">
                            Continue with email
                        </Button>
                    </div>
                </Form>

                <div className="z-10 flex justify-center text-center">
                    <Button color="link-color" size="md" href="#">
                        Continue with SAML SSO
                    </Button>
                </div>
            </div>
        </section>
    );
};
