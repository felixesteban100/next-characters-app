import { sortByType, sortDirectionType } from './FilterCharacters';
import PaginationCharacters from './PaginationCharacters';
import NoCharactersFound from './NoCharactersFound';
import { fetchCharacters, fetchPages } from '@/utilities/data';
import CharactersContainer from './CharactersContainer';
import CharacterComponent from './CharacterComponent';
import { getRandomImage } from '@/utilities/charactersUtils';
// import Image from 'next/image';

type CharactersProps = {
    queryOptions: QueryOptions,
    currentPage: number,
    sortBy: sortByType
    sortDirection: sortDirectionType,
}

export default async function Characters({ queryOptions, currentPage, sortBy, sortDirection }: CharactersProps) {
    const charactersToDisplay/* : Character[] */ = await fetchCharacters(queryOptions, currentPage, sortBy, sortDirection)
    const totalPages = await fetchPages(queryOptions)

    return (
        <div
            // className='mx-auto flex flex-col justify-between mb-5'
            className='px-8 flex flex-col gap-10 bg-transparent'
        >
            <div
            // className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'
            >
                {
                    charactersToDisplay.length > 0 ?
                        <CharactersContainer>
                            <>
                                {charactersToDisplay/* .sort(() => 0.5 - Math.random()) */.map(async (currentCharacter, index) => {
                                    const randomImage = await getRandomImage(currentCharacter)
                                    
                                    return (
                                        <CharacterComponent
                                            key={currentCharacter.slug}
                                            index={index}
                                            currentCharacter={JSON.parse(JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() }))}
                                            withPagination={true}
                                            randomImage={randomImage}
                                        />
                                    )
                                })}
                            </>
                        </CharactersContainer>
                        :
                        <NoCharactersFound />
                }

                <div className="my-5 flex w-full justify-center mt-24">
                    <PaginationCharacters totalPages={totalPages} />
                </div>
            </div>
        </div>
    )
}