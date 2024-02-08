import FavoriteCharacters from '@/app/utilities/ui/favorite/FavoriteCharacters';

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
        <main>
            
            <FavoriteCharacters />
        </main>
    );
}