import Image from "next/image";
import { Character } from "@/app/utilities/lib/definitions";
import CharacterFeatures from "./tabs/CharacterFeatures";

import FavoriteButton from "../FavoriteButton";
import { ScrollArea } from "@/components/ui/scroll-area";

type CharacterInfoProps = { 
    selectedCharacter: Character,
    // characterId: string, 
    image?: string, 
    withPagination: boolean 
}

export default async function CharacterInfo({ selectedCharacter, /* characterId, */ image, withPagination }: CharacterInfoProps) {
    return (
        <ScrollArea className="h-[80vh]">
            <div
                className="mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-5 px-5 lg:p-0"
            >
                <div
                    className="group cursor-pointer relative w-full lg:w-[30%] h-[75vh] shadow-xl rounded-md transition-all duration-300 lg:flex-none box characterId"
                >
                    {/* <CarouselCharacterImages
                        selectedCharacter={selectedCharacter}
                        withPagination={withPagination}
                    /> */}
                    <Image
                        width={500}
                        height={500}
                        // className={`transition-all duration-300 absolute w-[95%] h-[95%] object-cover rounded-md right-[15px] top-[15px] md:object-top`}
                        className={`transition-all duration-300  w-[100%] h-[100%] object-cover rounded-md md:object-top`}
                        src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md}
                        alt={selectedCharacter.name}
                        loading="lazy"
                    />
                    <FavoriteButton
                        // name={selectedCharacter.name}
                        // id={selectedCharacter.id.toString()}
                        character={selectedCharacter}
                    />
                </div>
                <CharacterFeatures selectedCharacter={selectedCharacter} withPagination={withPagination} />
            </div>
        </ScrollArea>
    )
}