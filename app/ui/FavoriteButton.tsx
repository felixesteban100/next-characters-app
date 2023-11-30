"use client";

import { Button } from "@/components/ui/button";
import { CharacterInfo } from "../lib/definitions";
import useCharacterStorage from "../hooks/useCharacterStorage";
import { LOCAL_STORAGE_KEY } from "../lib/constants";
import { useToast } from "@/components/ui/use-toast";

type FavoriteButtonProps = {
    name: string,
    id: string
}


export default function FavoriteButton({ name, id }: FavoriteButtonProps) {
    const { toast } = useToast()

    const [characters, saveCharacters] = useCharacterStorage(LOCAL_STORAGE_KEY)

    const characterInfo: CharacterInfo = { name, id, link: `/characters/${id}?name=${name}` }

    const handleToggle = () => {
        const existingCharacter = characters.find((char) => char.id === characterInfo.id);

        if (existingCharacter) {
            // Remove character if already added
            const updatedCharacters = characters.filter((char) => char.id !== characterInfo.id);
            saveCharacters(updatedCharacters);
            toast({
                title: `${characterInfo.name} removed`,
                description: `${JSON.stringify(characterInfo)}`,
            })
        } else {
            // Add character if not already added
            const updatedCharacters = [...characters, characterInfo];
            saveCharacters(updatedCharacters);
            toast({
                title: `${characterInfo.name} added`,
                description: `${JSON.stringify(characterInfo)}`,
            })
        }
    };


    return (
        <Button onClick={handleToggle}>{characters.find((char) => char.id === characterInfo.id) ? 'Remove' : 'Add'} Favorite</Button>
    )
}