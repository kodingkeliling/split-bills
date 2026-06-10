"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "@untitledui/icons";
import { DialogTrigger as AriaDialogTrigger, Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
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

export const HorizontalModal = () => {
    const [isOpen, setIsOpen] = useModalState();

    return (
        <AriaDialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalOverlay isDismissable>
                <Modal>
                    <Dialog>
                        <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-136">
                            <CloseButton onClick={() => setIsOpen(false)} theme="light" size="lg" className="absolute top-3 right-3 z-20" />
                            <div className="flex flex-col gap-4 px-4 pt-5 sm:flex-row sm:px-6 sm:pt-6">
                                <div className="relative size-max">
                                    <FeaturedIcon color="success" size="lg" theme="light" icon={CheckCircle} />

                                    <BackgroundPattern pattern="circle" size="sm" className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="relative flex flex-col gap-0.5">
                                    <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                        Blog post published
                                    </AriaHeading>
                                    <p className="text-sm text-tertiary sm:hidden">
                                        This blog post has been published. Team members will be able to edit this post.
                                    </p>
                                    <p className="hidden text-sm text-tertiary sm:flex">
                                        This blog post has been published. Team members will be able to edit this post and republish changes.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-1 flex-col-reverse gap-3 p-4 pt-6 sm:flex-row sm:items-center sm:px-6 sm:pt-8 sm:pb-6">
                                <Checkbox label="Don't show again" id="remember-me-checkbox" />
                                <Button color="secondary" size="lg" onClick={() => setIsOpen(false)} className="sm:ml-auto">
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
