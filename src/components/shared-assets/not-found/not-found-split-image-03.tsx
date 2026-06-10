"use client";

import { SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

export const NotFoundSplitImage03 = () => {
    return (
        <section className="relative flex flex-col gap-16 bg-primary py-16 lg:grid lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0">
            <div className="flex h-full lg:py-24">
                <div className="flex w-full items-center justify-center px-4 md:px-8">
                    <div className="flex flex-col items-start gap-8 md:gap-12 lg:pr-8">
                        <div className="flex max-w-132 flex-col gap-4 md:gap-6">
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                                Uh oh, we can't find that page...
                            </h1>
                            <p className="text-lg text-tertiary md:max-w-120 md:text-xl">
                                Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:
                            </p>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col items-center justify-center gap-4 self-stretch md:max-w-120 md:flex-row md:self-auto"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="search"
                                type="search"
                                placeholder="Search our site"
                                icon={SearchLg}
                                inputClassName="w-full md:py-3!"
                            />
                            <Button type="submit" size="xl" className="w-full md:w-max">
                                Search
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className="relative h-60 w-full px-4 md:h-95 md:px-8 lg:h-full lg:px-0">
                <img
                    className="inset-0 size-full bg-center object-cover object-top lg:absolute"
                    src="https://www.untitledui.com/shared-assets/spirals.webp"
                    alt="Image by Good Faces at Unsplash.com"
                />
            </div>
        </section>
    );
};
