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
            <div className='w-full flex justify-between items-center gap-5 my-10 px-8'>
                <h2 className="text-3xl font-bold">Favorites Characters</h2>
            </div>
            <FavoriteCharacters />
        </main>
    );
}