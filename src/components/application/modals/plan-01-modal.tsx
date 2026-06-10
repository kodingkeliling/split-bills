"use client";

import { useEffect, useState } from "react";
import { CreditCardRefresh, LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { DialogTrigger as AriaDialogTrigger, Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import * as RadioGroups from "@/components/base/radio-groups/radio-groups";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

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
        title: "Basic plan",
        secondaryTitle: "$10/month",
        description: "Up to 10 users and 20 GB individual data.",
        icon: LayersTwo01,
    },

    {
        value: "business",
        title: "Business plan",
        secondaryTitle: "$20/month",
        description: "Up to 20 users and 40 GB individual data.",
        icon: LayersThree01,
    },

    {
        value: "enterprise",
        title: "Enterprise plan",
        secondaryTitle: "$40/month",
        description: "Unlimited users and unlimited individual data.",
        icon: Zap,
    },
];

export const Plan01Modal = () => {
    const [isOpen, setIsOpen] = useModalState();

    return (
        <AriaDialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalOverlay isDismissable>
                <Modal>
                    <Dialog>
                        <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-120">
                            <CloseButton onClick={() => setIsOpen(false)} theme="light" size="lg" className="absolute top-3 right-3" />
                            <div className="flex flex-col gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                                <div className="relative w-max">
                                    <FeaturedIcon color="gray" size="lg" theme="modern" icon={CreditCardRefresh} />

                                    <BackgroundPattern pattern="circle" size="sm" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="z-10 flex flex-col gap-0.5">
                                    <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                        Change your plan
                                    </AriaHeading>
                                    <p className="text-sm text-tertiary">Flexible pricing that grows with you.</p>
                                </div>
                            </div>
                            <div className="h-5 w-full" />
                            <div className="px-4 sm:px-6">
                                <RadioGroups.IconSimple aria-label="Pricing plans" defaultValue={plans[0].value} items={plans} />
                            </div>
                            <div className="z-10 flex flex-1 flex-col-reverse gap-3 p-4 pt-6 sm:grid sm:grid-cols-2 sm:px-6 sm:pt-8 sm:pb-6">
                                <Button color="secondary" size="lg" onClick={() => setIsOpen(false)}>
                                    Cancel
                                </Button>
                                <Button color="primary" size="lg" onClick={() => setIsOpen(false)}>
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </AriaDialogTrigger>
    );
};
