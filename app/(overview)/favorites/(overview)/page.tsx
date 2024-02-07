import { Suspense } from 'react';
// import PaginationToggle from '@/app/utilities/ui/characters/PaginationToggle';
import FavoriteCharacters from '@/app/utilities/ui/favorite/FavoriteCharacters';
// import FavoriteCharactersNoPagination from '@/app/utilities/ui/favorite/FavoriteCharactersNoPagination';
import LoadingCharacters from '@/app/utilities/ui/characters/loaders/LoadingCharacters';

export function generateMetadata() {
    return {
        title: `Favorites Characters`,
    }
}

export default async function Page({
    // searchParams,
}: {
    /* searchParams?: {
        query?: string;
        charactersIds?: string; 
    } */
}) {
    return (
        <main
        >
            <div className='w-full flex justify-between items-center gap-5 my-10 px-8'>
                <h2 className="text-3xl font-bold">Favorites Characters</h2>
            </div>

            <Suspense
                fallback={<LoadingCharacters />}
            >
                <FavoriteCharacters/>
            </Suspense>

        </main>
    );
}