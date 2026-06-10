"use client";

import type { SVGProps } from "react";
import { ArrowLeft, SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { cx } from "@/utils/cx";


export const TextBackground = (props: SVGProps<SVGSVGElement>) => (
    <svg width="880" height="357" viewBox="0 0 880 357" fill="none" {...props} className={cx("text-bg-tertiary", props.className)}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M439.348 356.4C411.664 356.4 387.902 349.378 368.062 335.336C348.335 321.181 333.148 300.792 322.5 274.167C311.964 247.429 306.696 215.243 306.696 177.609C306.808 139.977 312.132 107.96 322.668 81.5591C333.316 55.0466 348.503 34.8248 368.23 20.8956C388.07 6.96457 411.775 0 439.348 0C466.921 0 490.628 6.96457 510.467 20.8956C530.306 34.8248 545.493 55.0466 556.03 81.5591C566.678 108.072 572.001 140.089 572.001 177.609C572.001 215.357 566.678 247.599 556.03 274.335C545.493 300.96 530.306 321.293 510.467 335.336C490.74 349.378 467.034 356.4 439.348 356.4ZM439.348 303.655C460.869 303.655 477.85 293.039 490.291 271.808C502.845 250.462 509.122 219.064 509.122 177.609C509.122 150.199 506.264 127.17 500.547 108.521C494.831 89.8714 486.761 75.8302 476.337 66.3923C465.913 56.8442 453.583 52.0692 439.348 52.0692C417.94 52.0692 401.016 62.7429 388.574 84.0865C376.132 105.318 369.855 136.494 369.744 177.609C369.632 205.133 372.378 228.275 377.982 247.037C383.698 265.797 391.769 279.952 402.192 289.502C412.616 298.938 425.001 303.655 439.348 303.655Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 285.795V236.083L146.103 4.719H223.778V234.397H267.828V285.795H223.778V349.827H164.261V285.795H0ZM162.244 75.4923H164.933V234.397H63.8888V231.702L162.244 75.4923Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M612.172 236.083V285.795H776.433V349.827H835.951V285.795H880V234.397H835.951V4.719H758.276L612.172 236.083ZM777.106 75.4923H774.416L676.061 231.702V234.397H777.106V75.4923Z"
            fill="currentColor"
        />
    </svg>
);

export const NotFoundSimple05 = () => {
    return (
        <section className="flex min-h-screen flex-col overflow-hidden bg-primary py-16 md:px-20 md:py-24">
            <div className="relative flex h-full grow justify-center px-4 md:px-8 md:pt-[15vh]">
                <TextBackground className="absolute left-1/2 z-0 hidden -translate-x-1/2 md:block" />
                <div className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-start gap-8 md:gap-12 md:pt-[75px]">
                    <div className="z-10 flex w-full flex-col gap-4 text-center md:gap-6">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">We lost this page</h1>
                        <p className="text-lg text-tertiary md:text-xl">The page you are looking for doesn't exist or has been moved.</p>
                    </div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="z-10 flex w-full flex-col items-center justify-center gap-4 md:max-w-120 md:flex-row"
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
                        <Button type="submit" size="lg" className="w-full md:hidden" color="secondary">
                            Search
                        </Button>
                        <Button type="submit" size="xl" className="w-max max-md:hidden" color="secondary">
                            Search
                        </Button>
                    </Form>

                    <div className="z-10 flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button iconLeading={ArrowLeft} color="secondary" size="xl">
                            Go back
                        </Button>
                        <Button size="xl">Go home</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
