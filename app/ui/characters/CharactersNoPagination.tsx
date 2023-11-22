import CharactersContainer from '@/app/ui/characters/CharactersContainer';
import CharacterComponent from '@/app/ui/characters/CharacterComponent';
import { fetchCharactersNoPagination } from '@/app/lib/data';
import { Character, QueryOptions } from '@/app/lib/definitions';
import { sortByType, sortDirectionType } from './FilterCharacters';

type CharactersProps = {
    queryOptions: QueryOptions
    sortBy: sortByType
    sortDirection: sortDirectionType,
}

export default async function CharactersNoPagination({ queryOptions, sortBy, sortDirection }: CharactersProps) {
    const charactersToDisplay: Character[] = await fetchCharactersNoPagination(queryOptions, sortBy, sortDirection)

    return (
        <div className='mx-auto w-[90vw] flex flex-col justify-between mb-10'>
            <div className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'>
                <CharactersContainer>
                    <>
                        {
                            charactersToDisplay/* .sort(() => 0.5 - Math.random()) */.map((currentCharacter) => {
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
            <p className='mx-auto text-lg font-bold mt-11'>The Limit = 40</p>
        </div>
    )
}