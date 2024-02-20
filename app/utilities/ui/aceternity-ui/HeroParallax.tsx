"use client";
import { Header, HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
import { Character } from "../../lib/definitions";
import { Atom } from "lucide-react";

export function HeroParallaxDemo({ randomCharacters }: { randomCharacters: Character[] }) {

  const products = randomCharacters.map(c => {
    return {
      title: c.name,
      link: `/characters/${c.id}?name=${c.name}`,
      thumbnail:
        c.images.md,
    }
  })

  return <>
    <div className="hidden md:block">
      <HeroParallax products={products} />
    </div>
    <div className="block md:hidden">
      <div className="h-[70vh] text-4xl text-transparent duration-1000 bg-primary cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-bold flex justify-center items-center gap-2">
        ch<Atom
          width={40}
          height={40}
          className={`object-contain text-primary animate-spin1`}
        />r4c732
      </div>
    </div>
  </>;
}