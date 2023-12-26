'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Character } from '@/app/lib/definitions'
import Image from 'next/image'

type CarouselCharacterImagesProps = {
    allImagesInfo: {
        property: string;
        img: string;
    }[];
    allImages: string[],
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
                                src={allImages[index]}
                                alt={`Photo by ${characterName}-${index}`}
                                className="aspect-[3/4] h-full w-fit object-cover"
                                width={300}
                                height={400}
                            />
                        </Link>
                        {/* <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div> */}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
