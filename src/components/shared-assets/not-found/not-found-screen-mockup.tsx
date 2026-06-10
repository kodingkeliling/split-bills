"use client";

import { ArrowLeft } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const NotFoundScreenMockup = () => {
    return (
        <section className="flex min-h-screen items-start justify-center bg-primary py-16 md:items-center md:pb-24 lg:overflow-hidden lg:px-20">
            <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-16 px-4 md:px-8 lg:flex-row">
                <div className="flex w-full max-w-140 flex-col items-start gap-8 text-center md:gap-12 md:text-left">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="text-md font-semibold text-brand-secondary">404 error</p>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Under maintenance</h1>
                        </div>
                        <p className="text-lg text-tertiary md:max-w-120 md:text-xl">
                            The page you're looking for is currently under maintenance and will be back soon. Stay tuned!
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>

                <div className="lg:-mr-100">
                    <div className="rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]">
                        <div className="rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                            <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                {/* Light mode image (hidden in dark mode) */}
                                <img
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                    className="object-cover object-left-top lg:max-h-168.5 lg:max-w-none dark:hidden"
                                    alt="Dashboard mockup showing application interface"
                                />
                                {/* Dark mode image (hidden in light mode) */}
                                <img
                                    src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                    className="object-cover object-left-top not-dark:hidden lg:max-h-168.5 lg:max-w-none"
                                    alt="Dashboard mockup showing application interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
