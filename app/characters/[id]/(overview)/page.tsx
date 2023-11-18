import { Suspense } from 'react';
import CharacterInfo from '@/app/ui/characters/CharacterInfo';
import LoadingCharacterInfo from '@/app/ui/characters/loaders/LoadingCharacterInfo';
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { linkToCharactersPage } from '@/app/lib/constants';
import { fetchCharacterById } from '@/app/lib/data';

// type Props = {
//     params: { id: string }
//     searchParams: { [key: string]: string | string[] | undefined }
// }

export async function generateMetadata({ params/* , searchParams */ }: { params: { id: string }/* , searchParams: { image?: string }  */}) {
    const characterId = params.id || '70'

    const character = await fetchCharacterById(characterId)

    return {
        title: `${character ? character.name : "Not Found"}`,
    }
}

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { image?: string } }) {
    const characterId = params.id || '70'

    return (
        <section>
            <div className='w-[80vw] mx-auto'>
                <Breadcrumbs
                    breadcrumbs={[
                        {
                            label: 'Characters',
                            href: linkToCharactersPage
                        },
                        {
                            label: `Character-${characterId}`,
                            active: true,
                        },
                    ]}
                />
            </div>
            <div className='mb-5 lg:mb-0'>
                <Suspense fallback={<LoadingCharacterInfo />}>
                    <CharacterInfo characterId={characterId} image={searchParams.image} />
                </Suspense>
            </div>
        </section>
    );
}