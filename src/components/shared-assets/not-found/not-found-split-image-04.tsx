"use client";

import { ArrowLeft } from "@untitledui/icons";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

export const NotFoundSplitImage04 = () => {
    return (
        <section className="grid min-h-screen bg-primary py-16 md:pb-24 lg:px-20">
            <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-16 px-4 md:px-8 lg:flex-row lg:gap-8">
                <div className="flex w-full max-w-140 flex-col items-start gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <span className="w-max">
                                <BadgeWithDot color="brand" size="lg" type="modern">
                                    404 error
                                </BadgeWithDot>
                            </span>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Page not found</h1>
                        </div>
                        <p className="max-w-lg text-lg text-tertiary md:text-xl">
                            Sorry, the page you are looking for doesn't exist. <br className="max-md:hidden" /> Here are some helpful links:
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>

                <div className="relative h-70 w-full md:h-110 lg:h-full lg:max-h-none">
                    <img
                        className="absolute inset-0 size-full object-cover"
                        src="https://www.untitledui.com/shared-assets/mountain.webp"
                        alt="Image for Split Mockup"
                    />
                </div>
            </div>
        </section>
    );
};
