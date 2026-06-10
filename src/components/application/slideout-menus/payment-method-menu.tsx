"use client";

import { useEffect, useState } from "react";
import { CreditCard02, Mail01, Plus } from "@untitledui/icons";
import { SlideoutMenu } from "@/components/application/slideout-menus/slideout-menu";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { PaymentIcon } from "@/components/base/radio-groups/radio-groups";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { ApplePayIcon, MastercardIcon, StripeIcon, VisaIcon } from "@/components/foundations/payment-icons";

/**
 * This is a utility hook that automatically reopens the modal after
 * it's closed. It's used only for demo purposes and can be safely
 * removed and replaced with a regular `useState` hook.
 */
const useModalState = (defaultValue: boolean = true) => {
    const [isOpen, setIsOpen] = useState(defaultValue);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsOpen(true);
            }, 700);
        }
    }, [isOpen]);

    return [isOpen, setIsOpen] as const;
};

const paymentCards = [
    {
        value: "card-1",
        title: "Visa ending in 1234",
        description: "Up to 10 users and 20 GB individual data.",
        logo: <VisaIcon className="h-8 w-11.5" />,
    },
    {
        value: "card-2",
        title: "Mastercard ending in 1234",
        description: "Up to 20 users and 40 GB individual data.",
        logo: <MastercardIcon className="h-8 w-11.5" />,
    },
    {
        value: "card-3",
        title: "Visa ending in 1234",
        description: "Unlimited users and unlimited individual data.",
        logo: <ApplePayIcon className="h-8 w-11.5" />,
    },
    {
        value: "card-4",
        title: "Stripe (Visa ending 1234)",
        description: "Unlimited users and unlimited individual data.",
        logo: <StripeIcon className="h-8 w-11.5" />,
    },
];

export const PaymentMethodMenu = () => {
    const [isOpen, setIsOpen] = useModalState();

    return (
        <SlideoutMenu.Trigger isOpen={isOpen} onOpenChange={setIsOpen}>
            <SlideoutMenu isDismissable>
                <SlideoutMenu.Header onClose={() => setIsOpen(false)} className="relative flex w-full items-start gap-4 px-4 pt-6 md:px-6">
                    <FeaturedIcon size="md" color="gray" theme="modern" icon={CreditCard02} />
                    <section className="flex flex-col gap-0.5">
                        <h1 className="text-md font-semibold text-primary md:text-lg">Payment method</h1>
                        <p className="text-sm text-tertiary">Update your plan payment details.</p>
                    </section>
                </SlideoutMenu.Header>
                <SlideoutMenu.Content className="w-full">
                    <section className="flex flex-col items-end gap-4">
                        <PaymentIcon aria-label="Payment methods" defaultValue={paymentCards[0]?.value} items={paymentCards} className="w-full" />
                        <Button size="md" color="link-color" iconLeading={Plus}>
                            Add payment method
                        </Button>
                    </section>
                    <div id="divider" className="w-full border-t border-secondary" />
                    <div className="flex flex-col gap-4">
                        <section className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-secondary">Billing contact</p>
                            <p className="text-sm text-tertiary">Add a second billing contact email.</p>
                        </section>
                        <Input size="md" isRequired icon={Mail01} placeholder="Email" label="Email address" defaultValue="accounts@untitledui.com" />
                    </div>
                </SlideoutMenu.Content>
                <SlideoutMenu.Footer className="flex w-full justify-end gap-3">
                    <Button size="md" color="secondary" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button size="md" onClick={() => setIsOpen(false)}>
                        Confirm
                    </Button>
                </SlideoutMenu.Footer>
            </SlideoutMenu>
        </SlideoutMenu.Trigger>
    );
};
