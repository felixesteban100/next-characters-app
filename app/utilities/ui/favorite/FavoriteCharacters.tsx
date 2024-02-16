'use client';

import CharacterComponent from '../characters/CharacterComponent';
import CharactersContainer from '../characters/CharactersContainer';
// import NoCharactersFound from '../characters/NoCharactersFound';
import useCharacterStorage from '../../hooks/useCharacterStorage';
import { getJustTheImagesFromTheImagesObject } from '../../lib/charactersUtils';

type FavoriteCharactersProps = {};

export default function FavoriteCharacters({ }: FavoriteCharactersProps) {
    const [charactersFavorite] = useCharacterStorage();

    return (
        <div>
            <div className='w-full flex justify-between items-center gap-5 my-10 px-8'>
                <h2 className="text-3xl font-bold">Favorites Characters</h2>
                <p>Characters #: {charactersFavorite.length}</p>
            </div>
            <div className="px-8 flex flex-col gap-10 bg-transparent mb-32">
                {/* charactersFavorite.length > 0 ? */ (
                    <CharactersContainer>
                        <>
                            {charactersFavorite.map((currentCharacter, index) => {
                                const allImages = [
                                    {
                                        key: 'md',
                                        value: currentCharacter.images.md,
                                    },
                                    ...getJustTheImagesFromTheImagesObject(currentCharacter.images)
                                ]

                                return (
                                    <CharacterComponent
                                        key={currentCharacter.slug}
                                        index={index}
                                        currentCharacter={JSON.parse(
                                            JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() })
                                        )}
                                        withPagination={true}
                                        randomImage={{ selectedRandomImage: allImages[Math.floor(Math.random() * allImages.length)], blurSelectedRandomImage: "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" }}
                                    />
                                )
                            })}
                        </>
                    </CharactersContainer>
                ) /* : (
                    <NoCharactersFound />
                ) */
                }
            </div>
        </div>

    );
}