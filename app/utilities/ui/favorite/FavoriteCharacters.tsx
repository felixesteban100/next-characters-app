'use client';

import CharacterComponent from '../characters/CharacterComponent';
import CharactersContainer from '../characters/CharactersContainer';
// import NoCharactersFound from '../characters/NoCharactersFound';
import useCharacterStorage from '../../hooks/useCharacterStorage';
import { getJustTheImagesFromTheImagesObject } from '../../lib/charactersUtils';
import TitlePage from '../TitlePage';
// import { useEffect, useState } from 'react';

type FavoriteCharactersProps = {};

// type CharacterAndRandomImage = {
//     powerstats: {
//         intelligence: number;
//         strength: number;
//         speed: number;
//         durability: number;
//         power: number;
//         combat: number;
//     };
//     appearance: {
//         gender: string;
//         race: string | null;
//         height: [string, string];
//         weight: [string, string];
//         eyeColor: string;
//         hairColor: string;
//     };
//     biography: {
//         fullName: string;
//         alterEgos: string;
//         aliases: string[];
//         placeOfBirth: string;
//         firstAppearance: string;
//         publisher: string;
//         alignment: string;
//     };
//     work: {
//         occupation: string;
//         base: string;
//     };
//     connections: {
//         groupAffiliation: string;
//         relatives: string;
//     };
//     images: {
//         xs: string;
//         sm: string;
//         md: string;
//         lg: string;
//         // mdi?: string;
//         // md2?: string;
//         [key: string]: string
//     };
//     _id: string;
//     id: number;
//     name: string;
//     slug: string;
//     comics?: string[];
//     randomImage?: {
//         selectedRandomImage: { key: string; value: string; };
//         blurSelectedRandomImage: string;
//     }
// };

export default function FavoriteCharacters({ }: FavoriteCharactersProps) {
    const [charactersFavorite] = useCharacterStorage();

    // const [data, setData] = useState<CharacterAndRandomImage[]>([])
    // const [isLoading, setLoading] = useState(true)

    // useEffect(() => {
    //     charactersFavorite.map((currentCharacter) => {
    //         getRandomImage(currentCharacter).then((randomImage) => {
    //             setData(prev => [...prev, {
    //                 ...currentCharacter,
    //                 randomImage: randomImage
    //             }])
    //             setLoading(false)
    //         })
    //     })
    // }, [])

    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No profile data</p>

    return (
        <div>
            <TitlePage
                label={'Favorites Characters'}
                secondPart={<p>Characters #: {charactersFavorite.length}</p>}
            />
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
                                const randomImage = { selectedRandomImage: allImages[Math.floor(Math.random() * allImages.length)], blurSelectedRandomImage: "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" }
                                return (
                                    <CharacterComponent
                                        key={currentCharacter.slug}
                                        index={index}
                                        currentCharacter={JSON.parse(
                                            JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() })
                                        )}
                                        withPagination={true}
                                        // randomImage={currentCharacter.randomImage ?? randomImage}
                                        randomImage={randomImage}
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