// import Image from "next/image";
// import Particles from "./ui/Particles";
// import theme from "./lib/useTailwind";
// unstable_noStore()
// import NavLinks from "./utilities/ui/NavLinks";
import { HeroParallaxDemo } from '@/app/utilities/ui/aceternity-ui/HeroParallax';
import { fetchCharacterByIds, getRandomIdRecursively } from "./utilities/lib/data";
import Navbar from "./utilities/ui/Navbar";

// const randomId = allIds[Math.floor(Math.random() * allIds.length)]

export default async function Home() {
  const randomIds = []

  for (let i = 0; i < 16; i++) {
    const id = await getRandomIdRecursively()
    randomIds.push(parseInt(id))
  }

  const randomCharacters = await fetchCharacterByIds(randomIds)

  return (
    <div
      className={`overflow-hidden`}
    >
      <div className="max-w-[80rem] md:w-[80vw] mx-auto px-5 md:px-0">
        <Navbar />
      </div>
      <HeroParallaxDemo
        randomCharacters={randomCharacters}
      />
    </div>
  )
}