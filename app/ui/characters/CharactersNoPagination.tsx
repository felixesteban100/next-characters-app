import { fetchCharactersNoPagination, getQueryOptions } from '@/app/lib/data';
import { QueryOptions } from '@/app/lib/definitions';
import { sortByType, sortDirectionType } from './FilterCharacters';
import NoCharactersFound from './NoCharactersFound';
import LoadMoreCharacters from './LoadMoreCharacters';

type CharactersProps = {
    // queryOptions: QueryOptions
    characterName: string
    side: string
    universe: string
    team: string
    gender: string
    race: string
    characterOrFullName: boolean

    sortBy: sortByType
    sortDirection: sortDirectionType,
}

export default async function CharactersNoPagination({ characterName, side, universe, team, gender, race, characterOrFullName,/* queryOptions, */ sortBy, sortDirection }: CharactersProps) {
    const charactersToDisplay/* : Character[] */ = await fetchCharactersNoPagination(characterName, side, universe, team, gender, race, characterOrFullName,/* queryOptions, */ sortBy, sortDirection, 1)

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
                            // queryOptions={/* JSON.parse( */JSON.stringify(queryOptions)}
                            characterName={characterName}
                            side={side}
                            universe={universe}
                            team={team}
                            gender={gender}
                            race={race}
                            characterOrFullName={characterOrFullName}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                        />
                    </div>
                    :
                    <NoCharactersFound />
            }
        </div>
    )
}