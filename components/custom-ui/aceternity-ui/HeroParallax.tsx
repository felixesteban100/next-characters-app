"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
import { Character } from "@/utilities/lib/definitions";
import { Atom } from "lucide-react";

export function HeroParallaxDemo({ randomCharacters }: { randomCharacters: Character[] }) {

  const characters = randomCharacters.map(c => {
    return {
      title: c.name,
      link: `/characters/${c.id}?name=${c.name}`,
      thumbnail:
        c.images.md,
    }
  })

  return <>
    <div 
    //hidden md:block 
    className="max-h-screen"
    >
      <HeroParallax characters={characters} />
    </div>
  </>;
}