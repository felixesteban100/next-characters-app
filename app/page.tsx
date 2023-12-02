// import Image from "next/image";
// import Particles from "./ui/Particles";
import { Atom } from "lucide-react";
// import theme from "./lib/useTailwind";
// unstable_noStore()

import NavLinks from "./ui/NavLinks";

// const randomId = allIds[Math.floor(Math.random() * allIds.length)]

// const images: string[] = [
//   "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/02/Justice-League-and-The-Avengers.jpg",
//   "https://cdn-images-1.medium.com/max/1143/0*8PhN36R1SL9i5u_t.jpeg",
//   "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/01/every-marvel-hero-vs-every-dc-hero-who-wins.jpg",
//   "https://images.alphacoders.com/699/699194.jpg",
//   "https://images2.alphacoders.com/283/283340.jpg",
//   "https://images5.alphacoders.com/618/618710.jpg",
//   "https://images5.alphacoders.com/133/1330956.jpeg",
//   "https://images6.alphacoders.com/705/705204.jpg",
//   "https://images7.alphacoders.com/133/1330752.png",
// ]

// const randomImage = images[0] //images[Math.floor(Math.random() * images.length)]
// console.log(randomId, randomImage)

export default function Home() {
  return (
    <div
      // style={{ background: `url(${randomImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}
      // className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
      // className={`overflow-hidden bg-gradient-to-tl from-background via-foreground/20 to-background`}
      className={`overflow-hidden`}
    >

      <div className="z-50 flex flex-col items-center justify-center w-screen h-screen ">
        <NavLinks />

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-foreground/50 to-foreground/0" />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-primary cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-bold flex justify-center items-center gap-2">
          ch<Atom
            width={100}
            height={100}
            className={`object-contain text-primary animate-spin1`}
          />r4c73
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-foreground/50 to-foreground/0" />
        {/* <Atom
          width={200}
          height={200}
          // className={`object-contain animate-spin1 text-primary`}
          className={`object-contain text-primary animate-spin1`}
        /> */}
        <div className="my-16 text-center animate-fade-in">
          {/* <Atom
            width={100}
            height={100}
            // className={`object-contain animate-spin1 text-primary`}
            className={`object-contain animate-spin1 text-white/50`}
          /> */}
          {/* <h2 className="text-sm ">
            I'm building{" "}
            <Link
              target="_blank"
              href="https://unkey.dev"
              className="underline duration-500 hover:text-primary"
            >
              unkey.dev
            </Link> to solve API authentication and authorization for developers.
          </h2> */}
        </div>
      </div>



      {/* <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          chronark
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            I'm building{" "}
            <Link
              target="_blank"
              href="https://unkey.dev"
              className="underline duration-500 hover:text-zinc-300"
            >
              unkey.dev
            </Link> to solve API authentication and authorization for developers.
          </h2>
        </div>
      </div> */}







    </div>
  )
}


/* <main className="flex gap-5 flex-col items-center justify-between p-24">
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
    </main> */