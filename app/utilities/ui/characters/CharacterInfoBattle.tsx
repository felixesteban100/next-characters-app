import { Character, RandomImage } from "@/app/utilities/lib/definitions";
import Stats from "./Stats";
import SelectCharacterForBattle from "./SelectCharacterForBattle";
import { GetColorLogosByPublisher, GetColorOfTheLogoByTeam, getCharacterStatsNumber, publisherIMG } from "../../lib/charactersUtils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getTeamsImagesByCharacter } from "./tabs/FeatureTabTeams";

type CharacterInfoBattleProps = {
    // characterId: string | undefined,
    selectedCharacter: Character
    urlParameterToChange: string;
    classNames?: string;
    randomImage: RandomImage
}

export default function CharacterInfoBattle({ selectedCharacter, urlParameterToChange, classNames = "", randomImage }: CharacterInfoBattleProps) {
    return (
        <div className={`flex flex-col gap-2 justify-center items-center mb-10 ${classNames}`}>
            <div
                className="flex flex-col gap-5"
            >
                <div className="flex flex-col gap-5 justify-center items-start">
                    <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
                        <Link href={`/characters/${selectedCharacter.id}?name=${selectedCharacter.name}&image=${randomImage.selectedRandomImage.key}`}>
                            <Button variant={"link"} className="m-0 p-0">
                                <p className="text-lg md:text-2xl">{selectedCharacter.id} - {selectedCharacter.name ?? `Select ${urlParameterToChange} character 👇`}</p>
                            </Button>
                        </Link>
                        <p className="text-lg md:text-2xl bg-secondary p-1 rounded-md w-fit">{getCharacterStatsNumber(selectedCharacter)} %</p>
                    </div>
                    <div className="w-full flex justify-between ">
                        <div className="flex gap-2 items-center md:ml-5">
                            <p>{selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</p>
                            <Image
                                alt={selectedCharacter.biography.publisher}
                                width={100}
                                height={100}
                                className={`${GetColorLogosByPublisher(selectedCharacter.biography.publisher)} w-auto h-[2rem]`}
                                src={publisherIMG(selectedCharacter.biography.publisher)}
                                
                            />
                        </div>
                        <div className="gap-2 items-center md:ml-5 hidden md:flex">
                            {getTeamsImagesByCharacter(selectedCharacter).sort(() => Math.random() - 0.5).map((teamFound, index) => {
                                if (index < 3) {
                                    return (
                                        <Link
                                            // href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700`}
                                            href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700`}
                                            key={teamFound.name}
                                            className="mx-auto flex gap-1 flex-col cursor-pointer group/items"
                                            data-tip={teamFound.name}
                                        >
                                            <Image
                                                className={`${GetColorOfTheLogoByTeam(teamFound.name)} w-auto h-[2rem]`}
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
                    selectedRandomImage={randomImage.selectedRandomImage.value}
                    blurSelectedRandomImage={randomImage.blurSelectedRandomImage}
                />
            </div>
            <div className="w-[80%]" /* className="w-[80%] hidden md:block" */>
                <Stats selectedCharacter={selectedCharacter} />
            </div>
        </div>
    )
}