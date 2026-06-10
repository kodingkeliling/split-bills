"use client";

import { useEffect, useState } from "react";
import { LayersThree01, LayersTwo01, MessageChatCircle } from "@untitledui/icons";
import { DialogTrigger as AriaDialogTrigger, Heading as AriaHeading, Radio as AriaRadio, RadioGroup as AriaRadioGroup } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { CheckboxBase } from "@/components/base/checkbox/checkbox";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { cx } from "@/utils/cx";

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

const plans = [
    {
        value: "basic",
        title: "$10/mth",
        secondaryTitle: "Basic plan",
        description: "Up to 10 users and 20 GB individual data.",
        icon: LayersTwo01,
        features: ["Basic features", "Basic reporting", "Up to 10 individual users", "20 GB data per user"],
    },

    {
        value: "business",
        title: "$20/mth",
        secondaryTitle: "Business plan",
        description: "Up to 20 users and 40 GB individual data.",
        icon: LayersThree01,
        features: ["Advanced features", "Advanced reporting", "Up to 20 individual users", "40 GB data per user"],
    },
];

export const Plan02Modal = () => {
    const [isOpen, setIsOpen] = useModalState();

    return (
        <AriaDialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalOverlay isDismissable>
                <Modal>
                    <Dialog>
                        <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-160">
                            <CloseButton onClick={() => setIsOpen(false)} theme="light" size="lg" className="absolute top-3 right-3 z-20" />
                            <div className="flex items-start gap-4 px-4 pt-5 max-sm:flex-col sm:px-6 sm:pt-6">
                                <div className="relative">
                                    <FeaturedIcon color="gray" size="lg" theme="modern" icon={LayersTwo01} />
                                    <BackgroundPattern
                                        pattern="circle"
                                        size="sm"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden"
                                    />
                                </div>

                                <div className="z-10 flex flex-col gap-0.5">
                                    <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                        Select plan
                                    </AriaHeading>
                                    <p className="text-sm text-tertiary">Simple and flexible per-user pricing.</p>
                                </div>
                            </div>
                            <div className="h-5 w-full" />
                            <div className="w-full border-t border-secondary" />

                            <AriaRadioGroup
                                defaultValue={plans[0].value}
                                aria-label="Pricing plans"
                                className="grid size-full grid-cols-1 gap-3 px-4 pt-5 sm:grid-cols-2 sm:gap-5 sm:px-6"
                            >
                                {plans.map((plan) => (
                                    <AriaRadio
                                        key={plan.value}
                                        value={plan.value}
                                        className={({ isSelected }) =>
                                            cx(
                                                "relative flex cursor-pointer flex-col items-start rounded-xl bg-primary shadow-xs ring-1 ring-secondary ring-inset",
                                                isSelected && "ring-2 ring-brand",
                                            )
                                        }
                                    >
                                        {(state) => (
                                            <>
                                                <div className="flex w-full flex-col gap-1 p-4 sm:gap-2 sm:px-5 sm:pt-5 sm:pb-0">
                                                    <h3 className="text-display-xs font-semibold text-primary">{plan.title}</h3>
                                                    <div className="flex items-center gap-0.5 sm:flex-col sm:items-start">
                                                        <p className="w-full text-md font-semibold text-primary">{plan.secondaryTitle}</p>
                                                        <p className="text-sm whitespace-nowrap text-tertiary">Billed annually</p>
                                                    </div>
                                                </div>

                                                <CheckboxBase {...state} size="md" className="absolute top-4 right-4 z-10" />

                                                <ul className="flex flex-col gap-3 p-5 max-sm:hidden">
                                                    {plan.features.map((feature) => (
                                                        <CheckItemText key={feature} color="primary" iconStyle="outlined" text={feature} size="sm" />
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </AriaRadio>
                                ))}
                            </AriaRadioGroup>
                            <div id="divider-wrap" className="h-8 w-full max-sm:hidden" />
                            <div className="w-full border-t border-secondary max-sm:hidden" />
                            <div className="z-10 flex w-full flex-1 flex-col-reverse gap-3 p-4 pt-6 sm:flex-row sm:px-6 sm:pb-6">
                                <Button size="lg" color="secondary" className="max-sm:hidden" iconLeading={MessageChatCircle}>
                                    Chat to us
                                </Button>
                                <div className="flex w-full flex-col-reverse justify-end gap-3 sm:flex-row">
                                    <Button color="secondary" size="lg" onClick={() => setIsOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button color="primary" size="lg" onClick={() => setIsOpen(false)}>
                                        Select plan
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </AriaDialogTrigger>
    );
};
