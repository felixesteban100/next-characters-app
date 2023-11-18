import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-5 flex-col items-center justify-between p-24">
      <Link
        href="/characters"
        className="hover:underline"
      >
        <p className="text-5xl">Characters Module</p>
      </Link>

      <Image
        src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/01/every-marvel-hero-vs-every-dc-hero-who-wins.jpg"
        width={1200}
        height={800}
        alt="Hero"
      />
    </main>
  )
}
