import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent from '@/app/ui/characters/CharacterComponent';
import { fetchCharacters, fetchPages } from '@/app/lib/data';
import { QueryOptions } from '@/app/lib/definitions';
import { sortByType, sortDirectionType } from './FilterCharacters';
import PaginationCharacters from './PaginationCharacters';
import NoCharactersFound from './NoCharactersFound';
// import { getTeamByUniverse } from '@/app/lib/constants';
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
                                {charactersToDisplay/* .sort(() => 0.5 - Math.random()) */.map((currentCharacter, index) => {
                                    return (
                                        <CharacterComponent
                                            key={currentCharacter.slug}
                                            index={index}
                                            currentCharacter={JSON.parse(JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() }))}
                                            withPagination={true}
                                        />
                                    )
                                })}
                            </>
                        </CharactersContainer>
                        :
                        <NoCharactersFound />
                }

                <div className="my-5 flex w-full justify-center">
                    <PaginationCharacters totalPages={totalPages} />
                </div>
            </div>
        </div>
    )
}