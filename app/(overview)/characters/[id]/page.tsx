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


// export function generateMetadata({ /* params, */ searchParams }: { params: { id: string }, searchParams: { name: string, image?: string } }) {
//     return {
//         // title: `${character ? character.name : "Not Found"}`,
//         title: `${searchParams.name}`,
//     }
// }

import type { Metadata } from 'next'
import TitlePage from '@/app/utilities/ui/TitlePage';
import LoadingCharacterInfo from '@/app/utilities/ui/characters/loaders/LoadingCharacterInfo';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Character',
}

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { name: string, pagination?: string, image?: string } }) {
    const characterId = params.id || '70'
    const withPagination = searchParams?.pagination === "true"

    const selectedCharacter: Character | null = await fetchCharacterById(characterId)

    if (!selectedCharacter) notFound()

    return (
        <main className='p-0 md:px-5'>
            <TitlePage
                label={searchParams.name}
                secondPart={<FavoriteButton
                    character={selectedCharacter}
                />}
                classesContainer='mb-5'
            />

            <Suspense key={searchParams.name} fallback={<LoadingCharacterInfo />}>
                <CharacterInfo
                    selectedCharacter={selectedCharacter}
                    image={searchParams.image}
                    withPagination={withPagination}
                />
            </Suspense>
        </main>
    );
}