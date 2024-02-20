"use client";

import { Button } from "@/components/ui/button";
import { Character, CharacterInfo } from "../lib/definitions";
import { toast } from "sonner"
import { Star } from "lucide-react";
import useCharacterStorage from "../hooks/useCharacterStorage";

type FavoriteButtonProps = {
    character: Character
}


export default function FavoriteButton({ character }: FavoriteButtonProps) {
    const [characters, setCharacters] = useCharacterStorage()
    const characterInfo: CharacterInfo = { ...character, link: `/characters/${character.id}?name=${character.name}` }

    const handleToggle = () => {
        const existingCharacter = characters.find((char) => char.id === characterInfo.id);

        if (existingCharacter) {
            // Remove character if already added
            const updatedCharacters = characters.filter((char) => char.id !== characterInfo.id);
            setCharacters(updatedCharacters);
            toast(`${characterInfo.name} removed`, {
                description: `${JSON.stringify({id: characterInfo.id, slug: characterInfo.slug})}`,
                // action: {
                //     label: "Add",
                //     onClick: () => handleToggle(),
                // },
            })
        } else {
            // Add character if not already added
            const updatedCharacters = [characterInfo, ...characters];
            setCharacters(updatedCharacters);
            toast(`${characterInfo.name} added`, {
                description: `${JSON.stringify({id: characterInfo.id, slug: characterInfo.slug})}`,
                // action: {
                //     label: "Remove",
                //     onClick: () => handleToggle(),
                // },
            })
        }
    };


    return (
        <Button
            onClick={handleToggle}
            size={"icon"}
            variant={"ghost"}
            className="hover:bg-transparent"
        >
            <Star /* size={800} */ className={`h-[5rem] ${characters.find((char) => char.id === characterInfo.id) !== undefined ? 'fill-primary hover:fill-transparent' : 'transparent hover:fill-primary'}`} />
        </Button>
    )
}

/* <Button
            onClick={handleToggle}
            size={"icon"}
            variant={"ghost"}
            className="z-[100] absolute right-0 mt-10 mr-10 hover:bg-transparent"
        >
            <Star size={800} className={`h-[5rem] ${characters.find((char) => char.id === characterInfo.id) !== undefined ? 'fill-primary hover:fill-transparent' : 'transparent hover:fill-primary'}`} />
        </Button> */