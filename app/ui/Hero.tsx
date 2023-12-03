"use client";

import Image from "next/image";
import { motion } from 'framer-motion'

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

function Hero({ imgLogo, imgBg, alt, classes }: HeroProps) {
  return (
    // className="bg-hero bg-opacity-40 bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"
    //bg-[url('/hero.png')]
    <header className="relative max-w-[80rem] h-[25rem] overflow-hidden bg-background ">
      <Image
        src={imgBg ?? "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/02/Justice-League-and-The-Avengers.jpg"}
        alt="logo"
        fill
        className="object-cover w-full h-full opacity-20"
      />
      <motion.div
        className="absolute w-full h-full flex justify-between"
        variants={variants}
        initial={'hidden'}
        animate={'visible'}
        transition={{
          delay: /* index * */ 0.25,
          ease: 'easeInOut',
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        {/* <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-4xl lg:max-w-lg font-bold leading-[120%]">
            Explore The <span className="text-primary">Diverse Realms</span> of
            {alt !== null ? `\n${alt}` : `\nFictional Characters`}
          </h1>
        </div> */}
        <Image height={350} width={350} src={imgLogo ?? "https://i.ibb.co/5TDyQQR/mvdc.png"} alt={alt ?? "publisher"} className={`object-contain  ${classes}`} />
      </motion.div>
    </header>
  );
}

export default Hero;


/* 
 */