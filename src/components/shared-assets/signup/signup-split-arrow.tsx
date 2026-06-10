"use client";

import type { SVGProps } from "react";
import { Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { RatingStars } from "@/components/foundations/rating-stars";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const HandDrownArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg width="288" height="258" viewBox="0 0 288 258" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M15.0967 113.445C14.2315 112.032 12.3846 111.588 10.9717 112.453C9.55867 113.318 9.11464 115.165 9.97987 116.578L15.0967 113.445ZM162.86 107.723L162.99 104.725L162.989 104.725L162.86 107.723ZM131.715 189.869L133.787 187.699L133.786 187.699L131.715 189.869ZM265.62 95.1165C265.747 93.4645 264.511 92.0224 262.859 91.8956C261.207 91.7687 259.765 93.0051 259.638 94.657L265.62 95.1165ZM4.96459 133.214C4.6848 134.847 5.78184 136.398 7.4149 136.677C9.04796 136.957 10.5986 135.86 10.8784 134.227L4.96459 133.214ZM11.3998 113.418L11.5255 110.421C10.0178 110.358 8.69776 111.424 8.44293 112.912L11.3998 113.418ZM32.2838 116.86C33.9375 116.757 35.1949 115.334 35.0923 113.68C34.9898 112.026 33.5661 110.769 31.9124 110.871L32.2838 116.86ZM12.5383 115.011C9.97987 116.578 9.98054 116.579 9.98141 116.58C9.98195 116.581 9.98301 116.583 9.9841 116.585C9.98628 116.588 9.98924 116.593 9.99297 116.599C10.0004 116.611 10.011 116.628 10.0246 116.65C10.0518 116.694 10.0913 116.758 10.1429 116.84C10.2462 117.005 10.3979 117.246 10.597 117.556C10.9951 118.177 11.5827 119.079 12.3503 120.218C13.8851 122.495 16.1414 125.721 19.0433 129.546C24.8416 137.189 33.2451 147.257 43.6501 156.917C64.3246 176.113 93.6113 194.337 126.363 187.336L125.108 181.469C95.3382 187.833 68.0262 171.362 47.7325 152.52C37.6534 143.162 29.4804 133.376 23.8233 125.92C20.9974 122.195 18.8062 119.061 17.3255 116.864C16.5853 115.766 16.0231 114.903 15.6484 114.318C15.461 114.026 15.3206 113.804 15.2283 113.656C15.1821 113.582 15.1479 113.527 15.126 113.492C15.115 113.474 15.1071 113.461 15.1022 113.453C15.0997 113.449 15.0981 113.447 15.0972 113.445C15.0967 113.445 15.0966 113.444 15.0964 113.444C15.0965 113.444 15.0967 113.445 12.5383 115.011ZM126.363 187.336C158.628 180.439 175.623 160.808 180.802 142.301C183.373 133.116 183.052 124.095 180.047 117.132C177.003 110.078 171.123 105.078 162.99 104.725L162.73 110.72C168.157 110.955 172.232 114.165 174.538 119.51C176.885 124.947 177.31 132.516 175.024 140.684C170.492 156.881 155.365 175.001 125.108 181.469L126.363 187.336ZM162.989 104.725C155.288 104.393 147.15 107.725 139.958 113.066C132.727 118.438 126.182 126.035 121.642 134.729C112.544 152.153 111.32 174.541 129.643 192.038L133.786 187.699C117.931 172.558 118.721 153.288 126.961 137.506C131.09 129.598 137.046 122.704 143.536 117.883C150.067 113.032 156.873 110.467 162.73 110.72L162.989 104.725ZM129.642 192.038C139.019 200.994 152.105 203.903 166.111 202.32C180.113 200.738 195.318 194.656 209.486 185.231C237.786 166.404 262.653 133.748 265.62 95.1165L259.638 94.657C256.846 131.005 233.339 162.157 206.163 180.235C192.594 189.262 178.285 194.907 165.437 196.358C152.593 197.81 141.494 195.06 133.787 187.699L129.642 192.038ZM10.8784 134.227L14.3568 113.925L8.44293 112.912L4.96459 133.214L10.8784 134.227ZM11.3998 113.418C11.2742 116.416 11.2743 116.416 11.2745 116.416C11.2746 116.416 11.2749 116.416 11.2751 116.416C11.2757 116.416 11.2765 116.416 11.2776 116.416C11.2797 116.416 11.2828 116.416 11.2869 116.416C11.2951 116.417 11.3073 116.417 11.3233 116.418C11.3554 116.419 11.4028 116.421 11.4648 116.424C11.5886 116.429 11.7704 116.436 12.0031 116.445C12.4683 116.464 13.137 116.49 13.9518 116.521C15.5811 116.583 17.7969 116.663 20.1408 116.735C24.7449 116.876 30.089 116.996 32.2838 116.86L31.9124 110.871C30.064 110.986 25.059 110.883 20.3247 110.737C17.9995 110.666 15.7988 110.587 14.1789 110.526C13.3692 110.495 12.7051 110.469 12.2437 110.45C12.013 110.441 11.8331 110.434 11.711 110.429C11.65 110.426 11.6034 110.424 11.5722 110.423C11.5565 110.422 11.5448 110.422 11.537 110.421C11.5331 110.421 11.5301 110.421 11.5282 110.421C11.5272 110.421 11.5265 110.421 11.5261 110.421C11.5259 110.421 11.5257 110.421 11.5256 110.421C11.5255 110.421 11.5255 110.421 11.3998 113.418Z"
            fill="#9E77ED"
        />
    </svg>
);

export const SignupSplitArrow = () => {
    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="relative flex flex-col bg-primary">
                <header className="hidden p-8 md:block">
                    <UntitledLogo />
                </header>
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
                    <div className="flex w-full flex-col gap-8 sm:max-w-90">
                        <div className="flex flex-col gap-6">
                            <UntitledLogoMinimal className="size-10 lg:hidden" />

                            <div className="flex flex-col gap-2 md:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-md">Sign up</h1>
                                <p className="text-md text-tertiary md:hidden">Start turning your ideas into reality.</p>
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

                        <div className="flex justify-center gap-1 text-center">
                            <span className="text-sm text-tertiary">Already have an account?</span>
                            <Button href="#" color="link-color" size="md">
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
                <footer className="hidden justify-between p-8 pt-11 lg:flex">
                    <p className="text-sm text-tertiary">© Untitled UI 2077</p>

                    <a href="mailto:help@untitledui.com" className="flex items-center gap-2 text-sm text-tertiary">
                        <Mail01 className="size-4 text-fg-quaternary" />
                        help@untitledui.com
                    </a>
                </footer>
                <HandDrownArrow className="absolute -right-[67.09px] bottom-23 z-50 max-lg:hidden" />
            </div>

            <div className="relative hidden items-end justify-center overflow-hidden lg:flex">
                <img
                    src="https://www.untitledui.com/images/portraits/person-04"
                    className="absolute inset-0 size-full object-cover"
                    alt="Portrait of person providing testimonial"
                />
                <BackgroundPattern pattern="grid-check" size="md" className="absolute top-0 opacity-40" />
                <div className="z-10 flex flex-col items-start justify-start gap-8 bg-linear-to-t from-black/40 to-black/0 px-16 py-24">
                    {/* Stars illustration */}
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 40C25.4247 40 40 25.4247 40 0C40 25.4247 54.5753 40 80 40C54.5753 40 40 54.5753 40 80C40 54.5753 25.4247 40 0 40Z"
                            className="fill-fg-white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 12C7.62742 12 12 7.62742 12 0C12 7.62742 16.3726 12 24 12C16.3726 12 12 16.3726 12 24C12 16.3726 7.62742 12 0 12Z"
                            className="fill-warning-300"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M64 24C69.0849 24 72 21.0849 72 16C72 21.0849 74.9151 24 80 24C74.9151 24 72 26.9151 72 32C72 26.9151 69.0849 24 64 24Z"
                            className="fill-warning-300"
                        />
                    </svg>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-display-xl font-semibold -tracking-[1.2px] text-white">Start turning your ideas into reality.</h2>
                        <p className="text-lg font-medium text-white">
                            Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <img
                                className="size-10 rounded-full object-cover ring-2 ring-bg-primary"
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                alt="Olivia Rhye"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-2 ring-bg-primary"
                                src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                alt="Phoenix Baker"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-2 ring-bg-primary"
                                src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                alt="Lana Steiner"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-2 ring-bg-primary"
                                src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                                alt="Demi Wilkinson"
                            />
                            <img
                                className="size-10 rounded-full object-cover ring-2 ring-bg-primary"
                                src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                alt="Candice Wu"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row items-center gap-2">
                                <RatingStars className="gap-1" starClassName="text-warning-300" />
                                <p className="text-md font-semibold text-white">5.0</p>
                            </div>
                            <span className="text-md font-medium text-white">from 200+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
