"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Character } from "../../lib/definitions";
import { useSearchParams, useRouter } from "next/navigation"

import { fetchCharacterByNameToSearch, getRandomIdRecursively } from "../../lib/data";
import { useState } from "react";

import { Input } from "@/components/ui/input";

type SelectCharacterForBattleProps = {
    selectedCharacter: Character;
    urlParameterToChange: string;
}

export default function SelectCharacterForBattle({ selectedCharacter, urlParameterToChange }: SelectCharacterForBattleProps) {
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

    async function searchNames(value: string) {
        const names = await fetchCharacterByNameToSearch(value)
        setNames(names)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image
                    width={500}
                    height={500}
                    className="rounded-md w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] object-cover object-top"
                    src={selectedCharacter.images.md}
                    alt={selectedCharacter.name}
                    loading="lazy"
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select {urlParameterToChange} character</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>

                {/* <Label>Name</Label> */}
                <Input /* value={name} */ onChange={(e) => {
                    // onSubmit(e.target.value)
                    // use throttle here
                    searchNames(e.target.value)
                }} />
                <div className="flex flex-col">
                    {
                        names.map((c) => {
                            return (
                                <Button variant={"outline"} onClick={() => {
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