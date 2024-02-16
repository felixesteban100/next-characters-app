import { FaFemale, FaMale } from "react-icons/fa";
import { Dna, Globe2, Angry, Meh, Smile } from "lucide-react"
import { FaRobot } from "react-icons/fa";
import { RiAliensFill } from 'react-icons/ri'
import { Character } from "./definitions";
import { WithId } from "mongodb";
// import { getPlaiceholder } from "plaiceholder";

export function publisherIMG(publisher: string) {
  switch (publisher) {
    case "Marvel Comics":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png";

    case "DC Comics":
      // return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png";

    case "Shueisha":
      return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png";

    case "George Lucas":
      return "https://www.lucasfilm.com/app/uploads/logo_home2.png";

    case "Warner Bros":
      // return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png";

    case "Dark Horse Comics":
      return "https://d2lzb5v10mb0lj.cloudfront.net/dhc/common/dh_direct.png";

    case "Image Comics":
      return "https://seeklogo.com/images/I/image-comics-logo-16D25B0126-seeklogo.com.png";

    case "IDW Publishing":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg/800px-Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg.png";

    case "Microsoft":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png";

    case 'Super Sentai':
      return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0edd84a8-10d0-47e4-919d-bd37e670d24e/df8jt2a-c466bdae-03b1-4101-9b7d-ff9b390f3690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlZGQ4NGE4LTEwZDAtNDdlNC05MTlkLWJkMzdlNjcwZDI0ZVwvZGY4anQyYS1jNDY2YmRhZS0wM2IxLTQxMDEtOWI3ZC1mZjliMzkwZjM2OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v7K-_yO7lBPO-ovgXQIZ3WQRIkamd7md2DajHQYv52w"

    case 'SEGA':
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/800px-SEGA_logo.svg.png"

    /**
* "Angel"
* "NBC - Heroes"
* Tempest
* SyFy
* ABC Studios
* Icon Comics
* Universal Studios
* Gemini V
* null
* Star Trek
* Goliath
* Deadpool
* Wildstorm
* South Park
* Sony Pictures
* Vindicator II
* Titan Books
* J. K. Rowling
* Microsoft
* She-Thing
* Rebellion
*
*/

    default:
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU";
  }
}

/* CHARACTERS PAGE */

export function GetColorOfTheLogoByTeam(teamName: string): string {
  switch (teamName) {
    case 'X-Men':
      return 'rounded-full invert-0 dark:invert';
    case 'Supernatural':
    case 'X-Men-Original':
    case 'Midnight Sons':
    case 'Justice League-Original':
      return 'invert-0 dark:invert';

    case "Inhumans":
    case "Symbiotes":
      return 'rounded-full invert dark:invert-0';

    default: return '';
  }
}

export function GetColorLogosByPublisher(publisher: string): string {
  switch (publisher) {
    case 'Shueisha':
    case 'George Lucas':
      return 'invert dark:invert-0'

    case 'Dark Horse Comics':
    case 'Image Comics':
      return 'invert-0 dark:invert'

    default: return ''
  }
}

export function GetDimentionsOfTheLogoForCard(publisher: string): string {
  switch (publisher) {
    case 'DC Comics'  || 'Microsoft':
      return 'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'

    case 'Warner Bros':
      return 'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'

    default:
      return 'h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]'
  }
  return ""
}


export function getGenderIcon(gender: string, size: number) {
  return gender.toLowerCase() === "male" ?
    // "🚹"
    <FaMale size={size} />
    :
    gender.toLowerCase() === "female" ?
      // "🚺"
      <FaFemale size={size} />
      :
      <div></div>

}

export function getRaceIcon(race: string, size: number) {
  return race.toLowerCase().includes("meta") ?
    // "🧬"
    <Dna size={40} />
    :
    race?.toLowerCase() === "human" ?
      // "🌎"
      <Globe2 size={40} />
      :
      race?.toLowerCase() === "mutant" ?
        // "🧬"
        <Dna size={40} />
        :
        race?.toLowerCase() === "android" || race?.toLowerCase() === "cyborg" && (race !== null) ?
          // "🤖"
          <FaRobot size={40} />
          :
          race?.toLowerCase() === "alien" || race?.toLowerCase() === "eternal" || race?.toLowerCase() === "asgardian" || race?.toLowerCase() === "kryptonian" && (race !== null) ?
            // "👽"
            <RiAliensFill size={40} />
            :
            // "🌎"
            <Globe2 size={40} />

}

export function getAlignmentIcon(alignment: string, size: number) {
  return alignment === "good" ?
    // "😃"
    <Smile size={size} />
    :
    alignment === "bad" ?
      // "😡"
      <Angry size={size} />
      :
      // "😐"
      < Meh size={size} />
}

export function AlignmentTranslator(alignment: string) {
  return alignment === "good" ? "Hero" : alignment === "bad" ? "Villain" : "Anti-Hero"
}

export function getJustTheImagesFromTheImagesObject(images: { [key: string]: string }) {
  return Object.entries(images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => {
    return { key: c[0], value: c[1] }
  })
}

export function getWinnerBetweenTwoCharacters(first: Character, second: Character, firstStats: number, secondStats: number) {
  return firstStats === secondStats ? "Tie" : firstStats > secondStats ? first.name : second.name
}

export function getCharacterStatsNumber(selectedCharacter: Character) {
  return Math.floor(Object.entries(selectedCharacter.powerstats).reduce((acc, [_, value]) => {
    acc += value
    return acc
  }, 0) / 6)
}

// export const dynamicBlurDataUrl = async (url: string) => {
//   try {
//     const buffer = await fetch(url).then(async (res) =>
//     Buffer.from(await res.arrayBuffer())
//   );

//   const { base64 } = await getPlaiceholder(buffer);

//   return base64
//   } catch (error: unknown) {
//     //error handling
//     if (error instanceof Error) return error.message
//     else if (error && typeof error === "object" && "message" in error)
//       return error.message as string
//     else if (typeof error === "string") return error;
//     else return "Unexpected error!"
//   }
// }

// export async function dynamicBlurDataUrl(url: string) {
//   const res = await fetch(url)

//   if (!res.ok) {
//     throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
//   }

//   const buffer = await res.arrayBuffer()

//   const { base64 } = await getPlaiceholder(Buffer.from(buffer))

//   return base64
// }


// this blur image thing doesn't work on production (vercel) :-|
const baseUrl =
  process.env.VERCEL_ENV === 'development'
    ? 'http://localhost:3000/'
    : `https://${process.env.VERCEL_URL}`;

export async function dynamicBlurDataUrl(url: string) {

  try {
    const base64str = await fetch(
      `${baseUrl}/_next/image?url=${url}&w=16&q=75`
    ).then(async (res) =>
      Buffer.from(await res.arrayBuffer()).toString('base64')
    );

    const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%'
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
  } catch (error) {
    
    console.log(error)
    const base64str = await fetch(
      `${baseUrl}/_next/image?url=${"https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}&w=16&q=75`
    ).then(async (res) =>
      Buffer.from(await res.arrayBuffer()).toString('base64')
    );

    const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%'
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

      return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
  }

  
}

export async function getRandomImage(character: Character) {
  const allImages: { key: string, value: string }[] = [
    {
      key: 'md',
      value: character?.images.md,
    },
    ...getJustTheImagesFromTheImagesObject(character?.images)
  ]

  const selectedRandomImage = allImages[Math.floor(Math.random() * allImages.length)]
  const blurSelectedRandomImage = await dynamicBlurDataUrl(selectedRandomImage.value)

  return {
    selectedRandomImage,
    blurSelectedRandomImage
  }
}