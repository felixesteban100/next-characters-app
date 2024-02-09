"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Character } from "../../lib/definitions";
import { useSearchParams, useRouter } from "next/navigation"

import { fetchCharacterByNameToSearch, getRandomIdRecursively } from "../../lib/data";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { debounce } from "lodash"

// import { CldImage } from 'next-cloudinary';

type SelectCharacterForBattleProps = {
    selectedCharacter: Character;
    urlParameterToChange: string;
    selectedRandomImage: string;
    blurSelectedRandomImage: string;
}

export default function SelectCharacterForBattle({ selectedCharacter, urlParameterToChange, selectedRandomImage, blurSelectedRandomImage }: SelectCharacterForBattleProps) {
    // const [name, setName] = useState(selectedCharacter.name)
    // const [names, setNames] = useState(["Batman", "Spider-Man"])
    const [names, setNames] = useState(new Array())

    const searchParams = useSearchParams()
    // const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)

    function onSubmit(name: string) {
        params.set(urlParameterToChange, name);
        replace(`/fightCharacter?${params.toString()}`)
    }

    async function RandomCharacter() {
        const randomName = await getRandomIdRecursively()
        onSubmit(randomName)
    }

    // async function searchNames(value: string) {
    //     const names = debounce(async () => {
    //         // const names = await fetchCharacterByNameToSearch(value)
    //         setNames(prev => [...prev, value])
    //         console.log("ok")
    //     }, 1000)
    // }

    const searchNames = debounce(async (value: string) => {
        const names = await fetchCharacterByNameToSearch(value)
        setNames(names)
    }, 1000)


        return (
            <Dialog>
                <DialogTrigger asChild>
                    {/* <CldImage
                    deliveryType="fetch"
                    width="500"
                    height="500"
                    // src={selectedCharacter.images.md}
                    src="https://static.wikia.nocookie.net/marvel_dc/images/0/08/Batman_Vol_3_131_Textless_Fabok_Variant.jpg/revision/latest?cb=20230106222502"
                    // src="cld-sample-5"
                    // sizes="100vw"
                    // className={`rounded-md w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] object-cover object-top`}
                    // crop="thumb"
                    alt={selectedCharacter.name}
                    // removeBackground
                    // pixelate
                /> */}

                    <Image
                        width={500}
                        height={500}
                        className={`rounded-md w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] object-cover object-top`}
                        // src={selectedCharacter.images.md}
                        src={selectedRandomImage}
                        // src={blurSelectedRandomImage}
                        alt={selectedCharacter.name}
                        loading="lazy"
                        // onLoad={(e) => console.log(e.target.naturalWidth)}
                        placeholder="blur"
                        blurDataURL={blurSelectedRandomImage}
                        unoptimized
                    />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Select {urlParameterToChange} character</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when youre done.
                        </DialogDescription>
                    </DialogHeader>

                    <Input onChange={(e) => {
                        searchNames(e.target.value)
                    }} />
                    <div className="flex flex-col">
                        {
                            names.map((c) => {
                                return (
                                    <Button key={c.id} variant={"outline"} onClick={() => {
                                        // setName(c)
                                        setNames(new Array())
                                        onSubmit(c.id)
                                    }}>
                                        <span>{c.name}</span>
                                    </Button>
                                )
                            })
                        }
                    </div>
                    {/* <Command className="rounded-lg border shadow-md">
                    <CommandInput value={name} onValueChange={(value) => {
                        setName(value)
                        // use throttle here
                        searchNames(value)
                    }} placeholder="Type a name for search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            {
                                names.map((c) => {
                                    return (
                                        <CommandItem onClick={() => setName(c)}>
                                            <span>{c}</span>
                                        </CommandItem>
                                    )
                                })
                            }
                        </CommandGroup>
                    </CommandList>
                </Command> */}
                    <DialogClose className="flex flex-col w-full gap-2">
                        {/* <Button className="w-full" onClick={() => onSubmit()}>Change</Button> */}
                        <Button className="w-full" variant={"secondary"} onClick={() => RandomCharacter()}>Random</Button>
                    </DialogClose>

                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }