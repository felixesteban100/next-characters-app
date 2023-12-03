"use client";

import { Button } from "@/components/ui/button";
import { CharacterInfo } from "../lib/definitions";
import { STORAGE_KEY } from "../lib/constants";
import { useToast } from "@/components/ui/use-toast";
import useCharacterStorage from "../hooks/useCharacterStorage";
import { Star } from "lucide-react";

type FavoriteButtonProps = {
    name: string,
    id: string
}


export default function FavoriteButton({ name, id }: FavoriteButtonProps) {
    const { toast } = useToast()
    const [characters, setCharacters] = useCharacterStorage(STORAGE_KEY)
    const characterInfo: CharacterInfo = { name, id, link: `/characters/${id}?name=${name}` }

    const handleToggle = () => {

        const existingCharacter = characters.find((char) => char.id === characterInfo.id);

        if (existingCharacter) {
            // Remove character if already added
            const updatedCharacters = characters.filter((char) => char.id !== characterInfo.id);
            setCharacters(updatedCharacters);
            toast({
                title: `${characterInfo.name} removed`,
                description: `${JSON.stringify(characterInfo)}`,
            })
        } else {
            // Add character if not already added
            const updatedCharacters = [...characters, characterInfo];
            setCharacters(updatedCharacters);
            toast({
                title: `${characterInfo.name} added`,
                description: `${JSON.stringify(characterInfo)}`,
            })
        }
    };


    return (
        <Button
            onClick={handleToggle}
            size={"icon"}
            variant={"ghost"}
            className="z-[100] absolute right-0 mt-10 mr-10 hover:bg-transparent"
        >
            {/* {characters.find((char) => char.id === characterInfo.id) ? 'Remove ' : 'Add '} ⭐ */}
            <Star size={800} className={`h-[5rem] ${characters.find((char) => char.id === characterInfo.id) !== undefined ? 'fill-primary hover:fill-transparent' : 'f transparent hover:fill-primary'}`} />
        </Button>
    )
}