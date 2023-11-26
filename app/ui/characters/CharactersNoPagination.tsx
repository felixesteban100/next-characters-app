import { fetchCharactersNoPagination } from '@/app/lib/data';
import { QueryOptions } from '@/app/lib/definitions';
import { sortByType, sortDirectionType } from './FilterCharacters';
import NoCharactersFound from './NoCharactersFound';
import LoadMoreCharacters from './LoadMoreCharacters';

type CharactersProps = {
    queryOptions: QueryOptions
    sortBy: sortByType
    sortDirection: sortDirectionType,
    withPagination: boolean
}

export default async function CharactersNoPagination({ queryOptions, sortBy, sortDirection, withPagination }: CharactersProps) {
    const charactersToDisplay/* : Character[] */ = await fetchCharactersNoPagination(queryOptions, sortBy, sortDirection, 1)

    return (
        <div
            // className='mx-auto w-[90vw] flex flex-col justify-between mb-10'
            className=' px-8 flex flex-col gap-10'
        >
            {
                charactersToDisplay.length > 0 ?
                    <div
                    // className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'
                    >
                        {/* <CharactersContainer>
                            <>
                                {charactersToDisplay}
                            </>
                        </CharactersContainer> */}
                        <LoadMoreCharacters
                            queryOptions={JSON.parse(JSON.stringify(queryOptions))}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                        />
                    </div>
                    :
                    <NoCharactersFound />
            }
            {/* ADD INFINITE SCROLLING */}
            {/* <p className='mx-auto text-lg font-bold mt-11'>The Limit = 40</p> */}
        </div>
    )
}