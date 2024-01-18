import { Character } from "@/app/utilities/lib/definitions";
import { fetchCharacterById } from "@/app/utilities/lib/data";
import Stats from "./Stats";
import SelectCharacterForBattle from "./SelectCharacterForBattle";
import { publisherIMG } from "../../lib/charactersUtils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CharacterInfoBattleProps = {
    characterId: string | undefined,
    urlParameterToChange: string
}

export default async function CharacterInfoBattle({ characterId, urlParameterToChange }: CharacterInfoBattleProps) {
    const selectedCharacter: Character | null = await fetchCharacterById(characterId ?? '0')

    const emptyCharacter: Character = {
        powerstats: {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0,
        },
        appearance: {
            gender: "",
            race: "",
            height: ["", ""],
            weight: ["", "",],
            eyeColor: "",
            hairColor: "",
        },
        biography: {
            fullName: "",
            alterEgos: "",
            aliases: [],
            placeOfBirth: "",
            firstAppearance: "",
            publisher: "",
            alignment: "neutral",
        },
        work: {
            occupation: "",
            base: "",
        },
        connections: {
            groupAffiliation: "",
            relatives: "",
        },
        images: {
            xs: "",
            sm: "",
            md: "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
            lg: "",
        },
        _id: "",
        id: 0,
        name: `Select ${urlParameterToChange} character 👇`,
        slug: "",
        comics: [""]
    }

    if (!selectedCharacter) return (
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <div
                className="flex flex-col gap-5"
            >
                <p className="text-2xl">{emptyCharacter.name}</p>
                <SelectCharacterForBattle
                    selectedCharacter={emptyCharacter}
                    urlParameterToChange={urlParameterToChange}
                />
            </div>
            <div className="w-[80%] hidden md:block">
                <Stats selectedCharacter={emptyCharacter} />
            </div>
        </div>
    )

    return (
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <div
                className="flex flex-col gap-5"
            >
                <div className="flex flex-col gap-5 justify-center items-start">
                    <Link href={`/characters/${selectedCharacter.id}`}>
                        <Button variant={"link"} className="m-0 p-0">
                            <p className="text-lg md:text-2xl">{selectedCharacter.id} - {selectedCharacter.name}</p>
                        </Button>
                    </Link>
                    <div className="flex gap-2 items-center md:ml-5">
                        <p>{selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</p>
                        <Image alt={selectedCharacter.biography.publisher} width={100} height={100} className="w-auto h-[2rem]" src={publisherIMG(selectedCharacter.biography.publisher)} />
                    </div>
                    {/* <p>Aligmnent: {selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</p> */}
                    {/* <div className="flex gap-2 items-center"><p>Universe:</p> <Image alt={selectedCharacter.biography.publisher} width={100} height={100} className="w-auto h-[2rem]" src={publisherIMG(selectedCharacter.biography.publisher)} /></div> */}
                </div>
                <SelectCharacterForBattle
                    selectedCharacter={selectedCharacter}
                    urlParameterToChange={urlParameterToChange}
                />
            </div>
            <div className="w-[80%] hidden md:block">
                <Stats selectedCharacter={selectedCharacter} />
            </div>
        </div>
    )
}