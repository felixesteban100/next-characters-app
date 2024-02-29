'use client'

import { useState, useEffect, useCallback } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MaximizeIcon } from 'lucide-react'

type CarouselCharacterImagesProps = {
    allImages: { key: string, value: string }[],
    characterName: string,
    characterId: string;
    withPagination: boolean
}


export default function CarouselCharacterImages({ allImages, characterId, characterName, withPagination }: CarouselCharacterImagesProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            // console.log("current")
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div>
            <Carousel
                opts={{
                    // align: "start",
                    loop: true,
                }}
                className="mx-auto w-[100%] max-w-sm"
            >
                <CarouselContent>
                    {allImages.map((imgInfo, index) => (
                        <CarouselItem key={index}>
                            <Link href={`/characters/${characterId}?name=${characterName}&image=${imgInfo.key}&withPagination=${withPagination}`} className="overflow-hidden rounded-md h-[90%] w-full">
                                <Image
                                    src={imgInfo.value}
                                    alt={`Photo #-${index}`}
                                    className="object-cover h-[35rem]"
                                    width={500}
                                    height={500}
                                />
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='mb-12' variant={'secondary'}><MaximizeIcon /></Button>
                </DialogTrigger>
                <DialogContent
                    // sm:max-w-[425px]
                    // h-[80vh] lg:h-[100vh] w-[80vw] max-w-none
                    className={`max-w-[35rem] bg-background/70 border-none shadow-none`}
                >
                    <div className="text-center text-sm text-muted-foreground">
                        Slide {current} of {count}
                    </div>
                    <Carousel
                        opts={{
                            // align: "start",
                            loop: true,

                        }}
                        //max-w-sm
                        // className="w-[50vw] max-w-none "
                        className="mx-auto h-full"
                        setApi={setApi}
                    >
                        <CarouselContent>
                            {allImages.map((imgInfo, index) => (
                                <CarouselItem 
                                    // className='box characterComponent'
                                    key={index}
                                >
                                    <Image
                                        src={imgInfo.value}
                                        alt={`Photo #-${index}`}
                                        // sm:h-[70%] lg:h-[90%] 
                                        className="object-cover mx-auto h-[50rem]"
                                        width={600}
                                        height={1200}
                                    />
                                 </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </DialogContent>
            </Dialog>
        </div>
    )
}
