import { fetchCharacterById } from '@/app/utilities/lib/data';
import { Character } from '@/app/utilities/lib/definitions';
import FavoriteButton from '@/app/utilities/ui/FavoriteButton';
import CharacterInfo from '@/app/utilities/ui/characters/CharacterInfo';
// import LoadingCharacterInfo from '@/app/utilities/ui/characters/loaders/LoadingCharacterInfo';
// import { Suspense } from 'react';
import { notFound } from 'next/navigation';
// import Breadcrumbs from "@/app/ui/breadcrumbs";

// type Props = {
//     params: { id: string }
//     searchParams: { [key: string]: string | string[] | undefined }
// }

// export async function generateMetadata({ params/* , searchParams */ }: { params: { id: string }/* , searchParams: { image?: string }  */}) {
//     const characterId = params.id || '70'
//     const character = await fetchCharacterById(characterId)
//     return {
//         title: `${character ? character.name : "Not Found"}`,
//     }
// }


export function generateMetadata({ /* params, */ searchParams }: { params: { id: string }, searchParams: { name: string, image?: string } }) {
    return {
        // title: `${character ? character.name : "Not Found"}`,
        title: `${searchParams.name}`,
    }
}

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { name: string, pagination?: string, image?: string } }) {
    const characterId = params.id || '70'
    const withPagination = searchParams?.pagination === "true"

    const selectedCharacter: Character | null = await fetchCharacterById(characterId)

    if (!selectedCharacter) notFound()

    return (
        <main>
            <div className='w-full flex justify-between items-center gap-5 my-7 px-8' /* className='w-[80%] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:px-8' */>
                <h2 className="text-3xl font-bold">{searchParams.name}</h2>
                <div /* className="flex gap-2" */>
                    <FavoriteButton
                        character={selectedCharacter}
                    />
                </div>
            </div>

            <CharacterInfo
                selectedCharacter={selectedCharacter}
                image={searchParams.image}
                withPagination={withPagination}
            />
        </main>
    );
}