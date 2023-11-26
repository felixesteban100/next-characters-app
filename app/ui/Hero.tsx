import { Atom } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  imgLogo: string | null;
  imgBg: string | null;
  alt: string | null;
  classes: string| null;
}

function Hero({imgLogo, imgBg, alt, classes}: HeroProps) {
  return (
    // className="bg-hero bg-opacity-40 bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"
    //bg-[url('/hero.png')]
    <header className="max-h-[48rem]">
      <Image
        src={imgBg ?? "https://cdn-images-1.medium.com/max/1143/0*8PhN36R1SL9i5u_t.jpeg"}
        alt="logo"
        width={1000}
        height={1000}
        className="object-cover w-full h-[80vh] opacity-20"
      />
      <div className="-translate-y-[45rem] lg:-translate-y-[40rem] max-h-[45rem] z-[999] sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
        <div className="flex-1 flex flex-col gap-10">
          {/* <Atom
            width={101}
            height={96}
            className={`object-contain animate-spin1 text-primary`}
          /> */}
          <h1 className="sm:text-6xl text-5xl lg:max-w-lg font-bold leading-[120%]">
            Explore The <span className="text-primary">Diverse Realms</span> of
            {alt !== null ? `\n${alt}` : `\nFictional Characters`}
          </h1>
        </div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image src={imgLogo ?? "https://i.ibb.co/5TDyQQR/mvdc.png"} alt="logo" fill className={`object-contain ${classes}`} />
        </div>
      </div>
    </header>
  );
}

export default Hero;
