"use client";

import { SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const NotFoundSplitImage01 = () => {
    return (
        <section className="relative flex flex-col gap-16 overflow-hidden bg-primary py-16 lg:grid lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0">
            <div className="flex w-full items-center justify-center px-4 md:px-8">
                <div className="flex flex-col items-start gap-8 md:w-140 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="relative w-max">
                            <FeaturedIcon color="gray" size="xl" theme="modern" className="z-10 hidden md:flex" icon={SearchLg} />
                            <FeaturedIcon color="gray" size="lg" theme="modern" className="z-10 md:hidden" icon={SearchLg} />

                            <BackgroundPattern
                                pattern="circle"
                                size="lg"
                                className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                            />
                            <BackgroundPattern
                                pattern="circle"
                                size="md"
                                className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                            />
                        </div>
                        <div className="z-10 flex flex-col gap-4 md:gap-6">
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">404 error</h1>
                            <p className="text-lg text-tertiary md:max-w-lg md:text-xl">
                                Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:
                            </p>
                        </div>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="z-10 flex w-full flex-col justify-center gap-4 md:max-w-120 md:flex-row md:items-center md:self-auto"
                    >
                        <Input isRequired name="search" type="search" placeholder="Search our site" inputClassName="w-full py-2.5! md:py-3!" icon={SearchLg} />
                        <Button type="submit" size="xl">
                            Search
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="h-60 w-full px-4 md:h-95 md:px-8 lg:h-full lg:py-6 lg:pr-6 lg:pl-0">
                <div className="relative flex h-full flex-1">
                    <img
                        className="inset-0 size-full bg-center object-cover object-center lg:absolute"
                        src="https://www.untitledui.com/shared-assets/spirals-shapes.webp"
                        alt="Image by Good Faces at Unsplash.com"
                    />
                </div>
            </div>
        </section>
    );
};
