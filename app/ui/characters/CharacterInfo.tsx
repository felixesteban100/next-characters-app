import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { fetchCharacterById } from "@/app/lib/data";
import CharacterFeatures from "./tabs/CharacterFeatures";
import { notFound } from 'next/navigation';
import FavoriteButton from "../FavoriteButton";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function CharacterInfo({ characterId, image, withPagination }: { characterId: string, image?: string, withPagination: boolean }) {
    const selectedCharacter: Character | null = await fetchCharacterById(characterId)

    if (!selectedCharacter) notFound()

    return (
        <ScrollArea className="h-[90vh]">
            <div
                className="mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-5 px-5 lg:p-0"
            // className="grid grid-flow-row grid-rows-2 md:grid-flow-col md:grid-cols-7 gap-5"
            >
                {/* <div
                className='h-[32rem] flex flex-col justify-between items-center gap-3 col-span-2'
            > */}
                <div
                    //md:col-span-2
                    className="group cursor-pointer relative w-full lg:w-[30%] h-[75vh] shadow-xl rounded-md transition-all duration-300 lg:flex-none"
                >
                    {/* <Image width={500} height={500} className={`transition-all duration-300 absolute w-full h-full object-cover blur-lg group-focus-visible:animate-pulse group-hover:animate-pulse `} src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" /> */}
                        {/* <CarouselCharacterImages
                            selectedCharacter={selectedCharacter}
                            withPagination={withPagination}
                        /> */}
                    <Image width={500} height={500}
                        // className={`transition-all duration-300 absolute w-[95%] h-[95%] object-cover rounded-md right-[15px] top-[15px] md:object-top`}
                        className={`transition-all duration-300 absolute w-[100%] h-[100%] object-cover rounded-md md:object-top`}
                        src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md}
                        alt={selectedCharacter.name}
                        loading="lazy"
                    />
                    <FavoriteButton
                        name={selectedCharacter.name}
                        id={selectedCharacter.id.toString()}
                    />
                </div>
                {/* <div className='self-center mt-5'>
                    <h1
                        className={`text-2xl lg:text-5xl font-bold text-center`}
                    >
                        {selectedCharacter.name}
                    </h1>
                </div> */}
                {/* </div> */}

                <CharacterFeatures selectedCharacter={selectedCharacter} withPagination={withPagination} />
            </div>
        </ScrollArea>
    )
}