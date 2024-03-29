// import Image from "next/image";
// import Particles from "./ui/Particles";
// import theme from "./lib/useTailwind";
// unstable_noStore()
// import NavLinks from "@/components/custom-ui/NavLinks";
import { HeroParallaxDemo } from '@/components/custom-ui/aceternity-ui/HeroParallax';
import { fetchCharacterByIds, getRandomIdRecursively } from "@/utilities/data";
// import Navbar from "./utilities/ui/Navbar";
// import PageAnimatePresence from './utilities/ui/page-transition/PageAnimatePresence';
// import { ScrollArea } from '@/components/ui/scroll-area';

// const randomId = allIds[Math.floor(Math.random() * allIds.length)]

export default async function Home() {
  const randomIds = []

  for (let i = 0; i < 50; i++) {
    const id = await getRandomIdRecursively()
    randomIds.push(parseInt(id))
  }

  const randomCharacters = await fetchCharacterByIds(randomIds)

  return (
    <main>
      <HeroParallaxDemo
        randomCharacters={randomCharacters}
      />
    </main>
  )
}

/* <div
      className={`overflow-hidden`}
    >
      <div className="max-w-[80rem] md:w-[80vw] mx-auto px-5 md:px-0">
        <Navbar />
      </div>
      <HeroParallaxDemo
        randomCharacters={randomCharacters}
      />
    </div> */