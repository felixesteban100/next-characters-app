import Link from "next/link";

export default function NavLinks() {
    
    const navigation: { link: string, name: string, id: string }[] = [
        { name: 'Start', link: '/characters', id: '0' },
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