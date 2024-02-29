'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from 'usehooks-ts'

type Props = {
    children: JSX.Element[] | JSX.Element;
    title: string;
    description: string;
    triggerClose?: JSX.Element
    trigger: JSX.Element;
    classNamesDialog?: string;
}

export function DrawerDialogDemo({ trigger, children, title, description, triggerClose, classNamesDialog }: Props) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {/* {children[0]} */}
                    {trigger}
                </DialogTrigger>
                <DialogContent className={classNamesDialog ? classNamesDialog : "sm:max-w-[425px]"}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    {/* {children.slice(1, children.length)} */}
                    {children}
                    <DialogFooter className="pt-2">
                        {triggerClose ?
                            <DialogClose>
                                {triggerClose}
                            </DialogClose>
                            :
                            null
                        }
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {/* {children[0]} */}
                {trigger}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>
                        {description}
                    </DrawerDescription>
                </DrawerHeader>
                {/* {children.slice(1, children.length)} */}
                {children}
                <DrawerFooter className="pt-2">
                    {triggerClose ?
                        <DrawerClose asChild>
                            {triggerClose}
                        </DrawerClose>
                        :
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    }
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
