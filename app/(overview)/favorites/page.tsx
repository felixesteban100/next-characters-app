import FavoriteCharacters from '@/app/utilities/ui/favorite/FavoriteCharacters';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Favorite character',
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
        <main>
            <FavoriteCharacters />
        </main>
    );
}