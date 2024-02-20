'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Atom } from 'lucide-react';

type LinkNavBarProps = {
    href: string;
    Icon?: JSX.Element/* React.ElementType */
    label?: string
    mobile?: true
}

export default function LinkNavBar({ href, Icon, label, mobile }: LinkNavBarProps) {
    const pathname = usePathname()

    const isThisPath = (pathname === "/" ? false : href.includes(pathname))

    if (mobile) {
        return (
            <Link
                href={href}
            >
                <>
                    {(label && Icon) ?
                        <Button className={`flex justify-center items-center gap-2 text-3xl ${isThisPath ? "text-primary" : "text-primary/40"}`} variant={'link'}>
                            {Icon}
                            <p className={`text-xl sm:text-3xl text-foreground decoration-primary ${isThisPath ? "underline" : ""}`}>{label}</p>
                        </Button>
                        :
                        <button className="pl-5 flex justify-center items-center gap-2">
                            <Atom
                                width={40}
                                height={40}
                                className={`object-contain animate-spin1 ${pathname === "/" ? "text-primary" : "text-primary/40"}`}
                            />
                            <p className="text-xl sm:text-3xl">Home</p>
                        </button>
                    }
                </>
            </Link>
        )
    }

    return (
        <Link
            href={href}
        >
            {(label && Icon) ?
                <>
                    <Button className={`hidden md:block ${isThisPath ? "text-primary" : "text-primary/40"}`} variant={'link'}>{label}</Button>
                    <Button className={`block md:hidden ${isThisPath ? "text-primary" : "text-primary/40"}`} variant={'link'}>{Icon}</Button>
                </>
                :
                <Atom
                    width={40}
                    height={40}
                    className={`object-contain animate-spin1 ${pathname === "/" ? "text-primary" : "text-primary/40"}`}
                />
            }
        </Link>
    )
}