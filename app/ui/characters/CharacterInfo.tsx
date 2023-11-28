import Image from "next/image";
import { Character } from "@/app/lib/definitions";
import { fetchCharacterById } from "@/app/lib/data";
import CharacterFeatures from "./tabs/CharacterFeatures";
import { notFound } from 'next/navigation';

export default async function CharacterInfo({ characterId, image, withPagination }: { characterId: string, image?: string, withPagination: boolean }) {
    const selectedCharacter: Character | null = await fetchCharacterById(characterId)

    if (!selectedCharacter) notFound()

    return (
        <div className="mx-auto w-[80vw] flex flex-col xl:flex-row justify-center items-center lg:items-start gap-0 lg:gap-11">
            <div
                // w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto
                className='flex flex-col justify-center items-center gap-3'
            >
                <div
                    // className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] hover:h-[50rem] hover:w-[40rem] shadow-xl rounded-md transition-all duration-300"
                    //md:w-72 md:h-[25rem]
                    className="relative h-[70vh] w-[85vw] lg:w-96 lg:h-[34rem]  shadow-xl rounded-md transition-all duration-300"
                >
                    <label className='group cursor-pointer w-full h-full' htmlFor={`my-modal-imageZoom`}>
                        <Image width={500} height={500} className={`transition-all duration-300 absolute w-full h-full object-cover blur-lg group-focus-visible:animate-pulse group-hover:animate-pulse `} src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                        <Image width={500} height={500} className={`transition-all duration-300 absolute w-[90%] h-[90%] object-cover rounded-md ml-3 md:ml-5 mt-5`} src={image ? selectedCharacter.images[`${image}`] : selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                    </label>
                </div>

                <div className='self-center mt-5'>
                    <h1
                        className={`text-2xl lg:text-5xl font-bold text-center`}
                    >
                        {selectedCharacter.name}
                    </h1>
                    <p
                        className={`py-2 text-center`}
                    >
                        {selectedCharacter.biography.fullName}
                    </p>
                </div>
            </div>

            <div
                // xl:h-[60vh] w-[90%] xl:w-[50%]
                className="flex flex-col w-[100%] lg:w-[70%] mx-auto mt-5 xl:mt-0 mb-10 md:mb-0"
            >
                <CharacterFeatures selectedCharacter={selectedCharacter} withPagination={withPagination} />
            </div>
        </div>
    )
}