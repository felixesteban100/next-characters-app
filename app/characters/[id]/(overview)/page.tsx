import { Suspense } from 'react';
import CharacterInfo from '@/app/ui/characters/CharacterInfo';
import LoadingCharacterInfo from '@/app/ui/characters/loaders/LoadingCharacterInfo';
// import Breadcrumbs from "@/app/ui/breadcrumbs";
// import { linkToCharactersPage } from '@/app/lib/constants';
// import { fetchCharacterById } from '@/app/lib/data';
import Navbar from '@/app/ui/Navbar';
import Particles from '@/app/ui/Particles';

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

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { pagination?: string, image?: string } }) {
    const characterId = params.id || '70'
    const withPagination = searchParams?.pagination === "true"

    return (
        <section className='w-[80vw] mx-auto'>
            <Navbar
                link=""
            />
            <div className=''>
                {/* <Breadcrumbs
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
                /> */}
            </div>
            {/* <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            /> */}
            <div className='z-10'>
                <Suspense fallback={<LoadingCharacterInfo />}>
                    <CharacterInfo characterId={characterId} image={searchParams.image} withPagination={withPagination} />
                </Suspense>
            </div>
        </section>
    );
}