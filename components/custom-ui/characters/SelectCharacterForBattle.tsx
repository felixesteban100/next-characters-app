"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation"

import { fetchCharacterByNameToSearch, getRandomIdRecursively } from "@/utilities/data";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { debounce } from "lodash"
import { DrawerDialogDemo } from "../dialog-drawer";

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
        <DrawerDialogDemo
            title={`Select ${urlParameterToChange} character`}
            description={` Make changes to your profile here. Click save when youre done.`}
            triggerClose={<Button className="w-full" variant={"secondary"} onClick={() => RandomCharacter()}>Random</Button>}
            trigger={
            <div className="relative w-full box characterId overflow-hidden">

                <Image
                    width={500}
                    height={500}
                    className={`rounded-md w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] object-cover object-top`}
                    src={selectedRandomImage}
                    alt={selectedCharacter.name}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurSelectedRandomImage}
                />
            </div>
        }
        >
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
        </DrawerDialogDemo>
    )
}

/* <Dialog>
            
            <DialogTrigger asChild>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>



                <DialogClose className="flex flex-col w-full gap-2">
                    <Button className="w-full" onClick={() => onSubmit()}>Change</Button>
                </DialogClose>

                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog> */