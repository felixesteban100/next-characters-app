"use client"

import Link from "next/link";
import useCharacterStorage from "../hooks/useCharacterStorage";

export default function NavLinks() {
    const [characters] = useCharacterStorage('next-characters-app')
    
    const navigation: { link: string, name: string, id: string }[] = [
        // { name: "Projects", href: "/projects" },
        // { name: "Contact", href: "/contact" },
        
        { name: 'all characters', link: '/characters', id: '0' },
        ...characters,
        // { name: `random ${randomId}`, href: `/characters/${randomId}`}

        // { name: `batman`, href: `/characters/70?name=Batman` },
        // { name: `spider-man`, href: `/characters/620?name=Spider-Man` }
    ];

    return (
        <nav className="my-16 animate-fade-in ">
            <ul className="flex items-center justify-center gap-4">
                {navigation.map((item) => (
                    <Link
                        key={item.link}
                        href={item.link}
                        className="text-sm duration-500 hover:text-primary"
                        // style={{color: theme?.colors?.primary1.toString() ?? "blue"}}
                    >
                        {item.name}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}