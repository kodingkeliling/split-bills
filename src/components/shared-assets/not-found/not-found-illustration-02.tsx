"use client";

import { SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { TextIllustration, TextIllustrationSM } from "./illustrations";

export const NotFoundIllustration02 = () => {
    return (
        <section className="grid flex-1 bg-primary py-16 md:min-h-screen md:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 items-start gap-8 px-4 md:items-center md:px-8 lg:grid-cols-2">
                <div className="mx-auto flex max-w-3xl flex-col items-start gap-8 md:gap-12 md:pr-8">
                    <TextIllustrationSM className="lg:hidden" />

                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-md font-semibold text-brand-secondary">404 error</span>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Under maintenance</h1>
                        </div>
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
                        className="flex w-full flex-col items-stretch gap-4 md:max-w-120 md:flex-row md:items-start"
                    >
                        <Input isRequired size="md" name="search" type="search" inputClassName="md:py-3!" placeholder="Search our site" icon={SearchLg} />
                        <Button type="submit" size="lg" className="md:hidden">
                            Search
                        </Button>
                        <Button type="submit" size="xl" className="max-md:hidden">
                            Search
                        </Button>
                    </Form>
                </div>

                <div className="relative hidden items-center justify-center lg:flex">
                    <TextIllustration className="md:w-full" />
                </div>
            </div>
        </section>
    );
};
