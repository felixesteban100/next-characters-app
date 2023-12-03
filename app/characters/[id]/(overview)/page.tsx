import { Suspense } from 'react';
import CharacterInfo from '@/app/ui/characters/CharacterInfo';
import LoadingCharacterInfo from '@/app/ui/characters/loaders/LoadingCharacterInfo';
// import Breadcrumbs from "@/app/ui/breadcrumbs";
// import { linkToCharactersPage } from '@/app/lib/constants';
// import { fetchCharacterById } from '@/app/lib/data';

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

    return (
        // <section className=''>
            <Suspense fallback={<LoadingCharacterInfo />}>
                <CharacterInfo characterId={characterId} image={searchParams.image} withPagination={withPagination} />
            </Suspense>
        // </section>
    );
}