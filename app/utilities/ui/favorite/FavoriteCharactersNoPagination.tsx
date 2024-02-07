/* import { fetchFavoriteCharactersNoPagination } from '@/app/utilities/lib/data'
import NoCharactersFound from '../characters/NoCharactersFound'
import CharactersContainer from '../characters/CharactersContainer'

type FavoriteCharactersProps = {
}


export default async function FavoriteCharactersNoPagination({ }: FavoriteCharactersProps) {
    const initialCharacters: { otherIds: number[], otherCharacters: JSX.Element[] } = await fetchFavoriteCharactersNoPagination([], charactersIds)

    return (
        <div className='px-8 flex flex-col gap-10 bg-transparent'>
            {(initialCharacters.otherCharacters.length === 0)
                ? <NoCharactersFound />
                : <div className='w-full mb-10'>
                    <CharactersContainer>
                        <>
                            {initialCharacters.otherCharacters}
                        </>
                    </CharactersContainer>
                    {(noMore === true && characters.length < howMany) ? <div ref={ref} className="w-full flex justify-center mb-16">
                        <LoaderSpinner />
                    </div> : null}
                </div>
            }
        </div>
    )
} */