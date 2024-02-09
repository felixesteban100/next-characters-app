// 'use client';

// import CharacterComponent from '../characters/CharacterComponent';
import CharactersContainer from '../characters/CharactersContainer';
import NoCharactersFound from '../characters/NoCharactersFound';
// import useCharacterStorage from '../../hooks/useCharacterStorage';

type FavoriteCharactersProps = {};

export default function FavoriteCharacters({ }: FavoriteCharactersProps) {
    // const [charactersFavorite] = useCharacterStorage();

    return (
        <div>
            <div className='w-full flex justify-between items-center gap-5 my-10 px-8'>
                <h2 className="text-3xl font-bold">Favorites Characters</h2>
                <p>Characters #: {/* {charactersFavorite.length} */}</p>
            </div>
            <div className="px-8 flex flex-col gap-10 bg-transparent">
                {/* charactersFavorite.length > 0  */ false? (
                    <CharactersContainer>
                        <>
                            {/* {charactersFavorite.map((currentCharacter, index) => (
                                <CharacterComponent
                                    key={currentCharacter.slug}
                                    index={index}
                                    currentCharacter={JSON.parse(
                                        JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() })
                                    )}
                                    withPagination={true}
                                />
                            ))} */}
                        </>
                    </CharactersContainer>
                ) : (
                    <NoCharactersFound />
                )
                }
            </div>
        </div>

    );
}