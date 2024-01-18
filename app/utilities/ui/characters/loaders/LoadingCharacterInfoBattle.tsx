import { Character } from "@/app/utilities/lib/definitions";
import Image from "next/image";
import Stats from "../Stats";

type CharacterInfoBattleProps = {
    urlParameterToChange: string
}

export default async function LoadingCharacterInfoBattle({ urlParameterToChange }: CharacterInfoBattleProps) {
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
        name: `Loading ${urlParameterToChange} character ...`,
        slug: "",
        comics: [""]
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <div
                className="flex flex-col gap-5"
            >
                <p className="text-2xl">{emptyCharacter.name}</p>
                <Image
                    width={500}
                    height={500}
                    // className={`transition-all duration-300 absolute w-[95%] h-[95%] object-cover rounded-md right-[15px] top-[15px] md:object-top`}
                    // className={`transition-all duration-300 absolute w-[100%] h-[100%] object-cover rounded-md md:object-top`}
                    className="w-[35rem] h-[35rem] object-cover animate-pulse"
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