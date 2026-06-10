"use client";

import { ArrowLeft } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const NotFoundSplitImage02 = () => {
    return (
        <section className="relative flex min-h-screen flex-col gap-16 bg-primary py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0">
            <div className="flex h-full lg:flex-1 lg:py-24">
                <div className="flex w-full items-center justify-center px-4 md:px-8">
                    <div className="flex flex-col items-start gap-8 md:w-140 md:gap-12">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Page not found</h1>
                            <p className="text-lg text-tertiary md:max-w-lg md:text-xl">
                                Sorry, the page you are looking for doesn't exist or has been moved. Here are some helpful links:
                            </p>
                        </div>

                        <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                            <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                                Go back
                            </Button>
                            <Button size="xl">Take me home</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-60 w-full px-4 md:h-95 md:px-8 lg:h-full lg:px-0">
                <img
                    className="inset-0 size-full bg-center object-cover object-top lg:absolute"
                    src="https://www.untitledui.com/marketing/photographer-girl.webp"
                    alt="Image by Good Faces at Unsplash.com"
                />
            </div>
        </section>
    );
};
