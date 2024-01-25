import { Character } from "@/app/utilities/lib/definitions";
import { fetchCharacterById } from "@/app/utilities/lib/data";
import Stats from "./Stats";
import SelectCharacterForBattle from "./SelectCharacterForBattle";
import { GetColorLogosByPublisher, publisherIMG } from "../../lib/charactersUtils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getTeamsImagesByCharacter } from "./tabs/FeatureTabTeams";

type CharacterInfoBattleProps = {
    characterId: string | undefined,
    urlParameterToChange: string
}

export default async function CharacterInfoBattle({ characterId, urlParameterToChange }: CharacterInfoBattleProps) {
    const selectedCharacter: Character | null = await fetchCharacterById(characterId ?? "0")

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
                {/* <p className="text-2xl">Character doesn't exits</p> */}
                <p className="text-2xl">{emptyCharacter.name}</p>
                <SelectCharacterForBattle
                    selectedCharacter={emptyCharacter}
                    urlParameterToChange={urlParameterToChange}
                />
            </div>
            {/* <div className="w-[80%] hidden md:block">
                <Stats selectedCharacter={emptyCharacter} />
            </div> */}
        </div>
    )

    return (
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <div
                className="flex flex-col gap-5"
            >
                <div className="flex flex-col gap-5 justify-center items-start">
                    <Link href={`/characters/${selectedCharacter.id}?name=${selectedCharacter.name}`}>
                        <Button variant={"link"} className="m-0 p-0">
                            <p className="text-lg md:text-2xl">{selectedCharacter.id} - {selectedCharacter.name}</p>
                        </Button>
                    </Link>
                    <div className="w-full flex justify-between ">
                        <div className="flex gap-2 items-center md:ml-5">
                            <p>{selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</p>
                            <Image alt={selectedCharacter.biography.publisher} width={100} height={100} className="w-auto h-[2rem]" src={publisherIMG(selectedCharacter.biography.publisher)} />
                        </div>
                        <div className="gap-2 items-center md:ml-5 hidden md:flex">
                            {getTeamsImagesByCharacter(selectedCharacter).sort(() => Math.random() - 0.5).map((teamFound, index) => {
                                if(index < 3){
                                    return (
                                        <Link
                                            // href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700`}
                                            href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700`}
                                            key={teamFound.name}
                                            className="mx-auto flex gap-1 flex-col cursor-pointer group/items"
                                            data-tip={teamFound.name}
                                        >
                                            <Image
                                                className={`${GetColorLogosByPublisher(teamFound.name)} w-auto h-[2rem]`}
                                                width={100}
                                                height={100}
                                                src={teamFound?.img}
                                                alt={teamFound?.name}
                                            />
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                <SelectCharacterForBattle
                    selectedCharacter={JSON.parse(JSON.stringify(selectedCharacter))}
                    urlParameterToChange={urlParameterToChange}
                />
            </div>
            <div className="w-[80%]" /* className="w-[80%] hidden md:block" */>
                <Stats selectedCharacter={selectedCharacter} />
            </div>
        </div>
    )
}