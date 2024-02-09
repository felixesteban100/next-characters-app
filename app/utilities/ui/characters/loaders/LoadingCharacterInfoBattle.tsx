import { Character } from "@/app/utilities/lib/definitions";
import Image from "next/image";
import Stats from "../Stats";

// type CharacterInfoBattleProps = {
//     urlParameterToChange: string
// }

export default async function LoadingCharacterInfoBattle(/* { urlParameterToChange }: CharacterInfoBattleProps */) {
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
        name: `Loading character ...`,
        slug: "",
        comics: [""]
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <div
                className="flex flex-col gap-5"
            >

                <div className="flex flex-col gap-5 justify-center items-start">
                    <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
                        <p className="text-lg md:text-2xl">{emptyCharacter.name}</p>
                        <p className="text-lg md:text-2xl bg-secondary p-1 rounded-md w-fit">{0} %</p>
                    </div>
                    <div className="w-full flex justify-between ">
                        <div className="flex gap-2 items-center md:ml-5">
                            <p>.....</p>
                            <Image
                                alt={emptyCharacter.name}
                                width={100}
                                height={100}
                                className="w-auto h-[2rem] animate-pulse rounded-md"
                                src={emptyCharacter.images.md}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
                <Image
                    width={500}
                    height={500}
                    className={`rounded-md w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] animate-pulse`}
                    src={emptyCharacter.images.md}
                    alt={emptyCharacter.name}
                    loading="lazy"
                />
            </div>
            <div className="w-[80%] animate-pulse">
                <Stats selectedCharacter={emptyCharacter} />
            </div>
        </div >
    )
}