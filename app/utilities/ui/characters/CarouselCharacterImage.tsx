'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'

type CarouselCharacterImagesProps = {
    allImagesInfo: {
        property: string;
        img: string;
    }[];
    allImages: {key: string, value: string}[],
    characterName: string,
    characterId: string;
    withPagination: boolean
}

export default function CarouselCharacterImages({ allImages, allImagesInfo, characterId, characterName, withPagination }: CarouselCharacterImagesProps) {
    return (
        <Carousel
            opts={{
                // align: "start",
                loop: true,
            }}
            className="mx-auto w-[100%] max-w-sm"
        >
            <CarouselContent>
                {/* Array.from({ length: 5 }) */allImagesInfo.map((imgInfo, index) => (
                    <CarouselItem key={index}>
                        <Link href={`/characters/${characterId}?name=${characterName}&image=${imgInfo.property}&withPagination=${withPagination}`} className="overflow-hidden rounded-md h-[90%] w-full">
                            <Image
                                src={allImages[index].value}
                                alt={`Photo #-${index}`}
                                className="h-full object-cover"
                                width={500}
                                height={500}
                                unoptimized
                            />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
