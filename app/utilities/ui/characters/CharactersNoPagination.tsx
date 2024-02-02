import { fetchCharactersNoPagination } from '@/app/utilities/lib/data'
import { sortByType, sortDirectionType } from './FilterCharacters'
import NoCharactersFound from './NoCharactersFound';
import LoadMoreCharacters from './LoadMoreCharacters';

type CharactersProps = {
    characterName: string
    howMany: number;
    side: string
    universe: string
    team: string
    gender: string
    race: string
    characterOrFullName: boolean

    sortBy: sortByType
    sortDirection: sortDirectionType
}


export default async function CharactersNoPagination({ characterName, howMany, side, universe, team, gender, race, characterOrFullName, sortBy, sortDirection }: CharactersProps) {
    const initialCharacters: { otherIds: number[], otherCharacters: JSX.Element[] } = await fetchCharactersNoPagination([], characterName, side, universe, team, gender, race, characterOrFullName, sortBy, sortDirection/* , 1 */)

    return (
        <div className='px-8 flex flex-col gap-10 bg-transparent'>
                {(initialCharacters.otherCharacters.length === 0)
                    ? <NoCharactersFound />
                    : <LoadMoreCharacters
                        // initialCharacters={initialCharacters.otherCharacters}
                        characterName={characterName}
                        howMany={howMany}
                        side={side}
                        universe={universe}
                        team={team}
                        gender={gender}
                        race={race}
                        characterOrFullName={characterOrFullName}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                }
        </div>
    )
}