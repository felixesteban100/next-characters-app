import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent from '@/app/ui/characters/CharacterComponent';
import { fetchCharacters, fetchCharactersNoPagination, fetchPages } from '@/app/lib/data';
import { Character, QueryOptions } from '@/app/lib/definitions';
import { sortByType, sortDirectionType } from './FilterCharacters';
import PaginationCharacters from './PaginationCharacters';
// import { getTeamByUniverse } from '@/app/lib/constants';
// import Image from 'next/image';

type CharactersProps = {
    queryOptions: QueryOptions
    currentPage: number,
    sortBy: sortByType
    sortDirection: sortDirectionType,
    universe: string;
    team: string
}

export default async function CharactersNoPagination({ queryOptions, currentPage, sortBy, sortDirection, universe, team }: CharactersProps) {
    const charactersToDisplay: Character[] = await fetchCharactersNoPagination(queryOptions, sortBy, sortDirection)

    return (
        <div className='mx-auto w-[90vw] flex flex-col justify-between mb-10'>
            <div className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'>
                <CharactersContainer>
                    <>
                        {
                            charactersToDisplay/* .sort(() => 0.5 - Math.random()) */.map((currentCharacter, index) => {
                                return (
                                    <CharacterComponent
                                        key={currentCharacter.slug}
                                        currentCharacter={{ ...currentCharacter, _id: currentCharacter._id.toString() }}
                                    />
                                )
                            })
                        }
                    </>
                </CharactersContainer>
            </div>
        </div>
    )
}