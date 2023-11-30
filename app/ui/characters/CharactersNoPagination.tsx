import { fetchCharactersNoPagination } from '@/app/lib/data';
import { sortByType, sortDirectionType } from './FilterCharacters';
import NoCharactersFound from './NoCharactersFound';
import LoadMoreCharacters from './LoadMoreCharacters';

type CharactersProps = {
    characterName: string
    side: string
    universe: string
    team: string
    gender: string
    race: string
    characterOrFullName: boolean

    sortBy: sortByType
    sortDirection: sortDirectionType
}

export default async function CharactersNoPagination({ characterName, side, universe, team, gender, race, characterOrFullName,/* queryOptions, */ sortBy, sortDirection }: CharactersProps) {
    const charactersToDisplay: JSX.Element[] = await fetchCharactersNoPagination(characterName, side, universe, team, gender, race, characterOrFullName,/* queryOptions, */ sortBy, sortDirection, 1)

    return (
        <div className='px-8 flex flex-col gap-10 bg-transparent'>
            {
                charactersToDisplay.length > 0 ?
                    <div>
                        <LoadMoreCharacters
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