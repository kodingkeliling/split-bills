"use client";

import { useEffect, useState } from "react";
import { Shield01 } from "@untitledui/icons";
import { DialogTrigger as AriaDialogTrigger, Heading as AriaHeading } from "react-aria-components";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
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

export const PasswordPromptModal = () => {
    const [isOpen, setIsOpen] = useModalState();

    return (
        <AriaDialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalOverlay isDismissable>
                <Modal>
                    <Dialog>
                        <div className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-xl sm:max-w-100">
                            <CloseButton onClick={() => setIsOpen(false)} theme="light" size="lg" className="absolute top-3 right-3" />
                            <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 sm:px-6 sm:pt-6">
                                <div className="relative size-max">
                                    <FeaturedIcon size="lg" color="brand" theme="light" icon={Shield01} />
                                    <BackgroundPattern pattern="circle" size="sm" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="z-10 flex flex-col items-center justify-center gap-0.5">
                                    <AriaHeading slot="title" className="text-md font-semibold text-primary">
                                        Please enter your password
                                    </AriaHeading>
                                    <p className="text-sm text-tertiary">Enter your password to make this change.</p>
                                </div>
                            </div>
                            <div className="h-5 w-full" />
                            <Form
                                id="password-prompt-form-modal"
                                className="z-10 flex flex-col gap-4 px-4 sm:px-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const data = Object.fromEntries(new FormData(e.currentTarget));
                                    console.log("Form data:", data);
                                    setIsOpen(false);
                                }}
                            >
                                <Input
                                    isRequired
                                    hideRequiredIndicator
                                    label="Email or username"
                                    type="email"
                                    name="email"
                                    placeholder="Email or username"
                                    autoComplete="email"
                                    size="md"
                                    defaultValue="olivia@untitledui.com"
                                />
                                <Input
                                    isRequired
                                    hideRequiredIndicator
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    size="md"
                                    defaultValue="12345678"
                                />
                            </Form>
                            <div className="z-10 flex flex-1 flex-col-reverse gap-3 p-4 pt-6 *:grow sm:grid sm:grid-cols-2 sm:px-6 sm:pt-8 sm:pb-6">
                                <Button color="secondary" size="lg" onClick={() => setIsOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" form="password-prompt-form-modal" color="primary" size="lg">
                                    Verify
                                </Button>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </AriaDialogTrigger>
    );
};
