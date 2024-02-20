// "use client";

import Image from "next/image";
// import { motion } from 'framer-motion'
import { dynamicBlurDataUrl } from "../lib/charactersUtils";
import { TwicImg } from "@twicpics/components/react";
import ImagesNextCloudinary from "./ImagesNextCloudinary";

type HeroProps = {
  imgLogo: string | null;
  imgBg: string | null;
  alt: string | null;
  classes: string | null;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

async function Hero({ imgLogo, imgBg, alt, classes }: HeroProps) {
  const img = imgBg ?? "https://assets-global.website-files.com/5ed7d58749f36f18d80eaf28/5ed7f9ac334769f96b230007_dc-vs.-marvel-1024x661.jpeg"
  const logo = imgLogo ?? "https://i.ibb.co/5TDyQQR/mvdc.png"

  const blurImgBg = await dynamicBlurDataUrl(img)
  // const blurLogo = await dynamicBlurDataUrl(logo)

  // https://www.twicpics.com/docs/components/next
  // https://account.twicpics.com/workspace/271a0f00-cd24-11ee-9dae-e32389fc533f

  // https://next.cloudinary.dev/installation
  // https://console.cloudinary.com/console/c-e9d7f1ee63e1607a0564cacb179db0/media_library/search?q=&view_mode=mosaic

  return (
    // className="bg-hero bg-opacity-40 bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"
    //bg-[url('/hero.png')]
    <header data-test="hero" className="relative max-w-[80rem] h-[25rem] overflow-visible bg-background group">
      <Image
        src={img}
        alt="bg-hero"
        fill
        className="object-cover w-full h-full group-hover:opacity-40 transition-all duration-300"

        placeholder="blur"
        blurDataURL={blurImgBg}

        // placeholder="maincolor"
        // transition="fade"
      />
      <div
        className="absolute w-full h-full flex justify-start items-end pb-20 pl-20"
      // variants={variants}
      // initial={'hidden'}
      // animate={'visible'}
      // transition={{
      //   delay: /* index * */ 0.25,
      //   ease: 'easeInOut',
      //   duration: 0.5,
      // }}
      // viewport={{ amount: 0 }}
      >
        {/* <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-4xl lg:max-w-lg font-bold leading-[120%]">
            Explore The <span className="text-primary">Diverse Realms</span> of
            {alt !== null ? `\n${alt}` : `\nFictional Characters`}
          </h1>
        </div> */}

        <Image
          height={200}
          width={200}
          src={logo}
          alt={alt ?? "publisher"}
          // group-hover:animate-bounce-z-16
          className={`object-contain ${classes} group-hover:scale3d-150 transition-all duration-300`}
        />
      </div>
    </header>
  );
}

export default Hero;


/* 
<motion.div
        className="absolute w-full h-full flex justify-between"
        variants={variants}
        initial={'hidden'}
        animate={'visible'}
        transition={{
          delay:  0.25,
          ease: 'easeInOut',
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        
        <image
          height={350}
          width={350}
          src={imgLogo ?? "https://i.ibb.co/5TDyQQR/mvdc.png"}
          alt={alt ?? "publisher"}
          className={`object-contain  ${classes}`}
        />
      </motion.div>
 */