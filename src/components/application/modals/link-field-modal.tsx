"use client";

import { useEffect, useState } from "react";
import { Check, CheckCircle, Copy01 } from "@untitledui/icons";
import { DialogTrigger as AriaDialogTrigger, Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { useClipboard } from "@/hooks/use-clipboard";

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

export const LinkFieldModal = () => {
    const [isOpen, setIsOpen] = useModalState();
    const [value, setValue] = useState("www.untitledui.com/blog");
    const { copy, copied } = useClipboard();

    return (
        <AriaDialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalOverlay isDismissable>
                <Modal>
                    <Dialog>
                        <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-128">
                            <CloseButton onClick={() => setIsOpen(false)} theme="light" size="lg" className="absolute top-3 right-3" />
                            <div className="flex flex-col gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                                <div className="relative w-max">
                                    <FeaturedIcon color="success" size="lg" theme="light" icon={CheckCircle} />

                                    <BackgroundPattern pattern="circle" size="sm" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="z-10 flex flex-col gap-0.5">
                                    <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                        Blog post published
                                    </AriaHeading>
                                    <p className="hidden text-sm text-tertiary sm:flex">
                                        This blog post has been published. Team members will be able to edit this post and republish changes.
                                    </p>
                                    <p className="text-sm text-tertiary sm:hidden">
                                        This blog post has been published. Team members will be able to edit this post.
                                    </p>
                                </div>
                            </div>
                            <div className="h-5 w-full" />
                            <div className="flex flex-row items-end justify-end gap-1 px-4 sm:gap-[5px] sm:px-6">
                                <Input isReadOnly size="md" label="Share link" value={value} onChange={setValue} />
                                <Button size="md" color="tertiary" onClick={() => copy(value)} iconLeading={copied ? Check : Copy01} />
                            </div>
                            <div className="z-10 flex flex-1 flex-col-reverse gap-3 p-4 pt-6 *:grow sm:grid sm:grid-cols-2 sm:px-6 sm:pt-8 sm:pb-6">
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
