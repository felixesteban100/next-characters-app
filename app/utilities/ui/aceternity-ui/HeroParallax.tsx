"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
import { Character } from "../../lib/definitions";

export function HeroParallaxDemo({ randomCharacters }: { randomCharacters: Character[] }) {

  const products = randomCharacters.map(c => {
    return {
      title: c.name,
      link: `/characters/${c.id}?name=${c.name}`,
      thumbnail:
        c.images.md,
    }
  })

  return <HeroParallax products={products} />;
}