// import { Suspense } from 'react'
// import LoadingCharacterInfoBattle from '../../characters/loaders/LoadingCharacterInfoBattle'
import CharacterInfoBattle from '../../characters/CharacterInfoBattle'
import { Separator } from '@/components/ui/separator'

import FightButton from "@/app/utilities/ui/fight/character/FightButton";
import RandomizeButton from './RandomizeButton';
import { fetchCharacterById } from '@/app/utilities/lib/data';
import { emptyCharacter } from '@/app/utilities/lib/constants';
import { getRandomImage } from '@/app/utilities/lib/charactersUtils';

type FightCharacterProps = {
    first: string | undefined
    second: string | undefined
}

export default async function FightCharacter({ first, second }: FightCharacterProps) {
    const selectedCharacter1 = await fetchCharacterById(first ?? "0") ?? emptyCharacter
    const selectedCharacter2 = await fetchCharacterById(second ?? "0") ?? emptyCharacter

    const randomImage1 = await getRandomImage(JSON.parse(JSON.stringify(selectedCharacter1)))
    const randomImage2 = await getRandomImage(JSON.parse(JSON.stringify(selectedCharacter2)))

    return (
        <>
            <div className='w-full flex justify-between items-center gap-5 my-10 px-8' /* className='w-[80%] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:px-8' */>
                {/* <h2 className="text-xl md:text-3xl font-bold">Fight Characters</h2> */}
                <h2 className="text-3xl font-bold">Fight Characters</h2>
                <div className="flex gap-2">
                    <FightButton
                        first={first}
                        imageKey1={randomImage1.selectedRandomImage.key}
                        second={second}
                        imageKey2={randomImage2.selectedRandomImage.key}
                    />
                    <RandomizeButton />
                </div>
            </div>

            <div className='h-full flex justify-center items-start gap-2 md:gap-10 w-full'>
                {/* WHY THE HECK THIS SUSPENSE AIN'T WORKING??? -_- */}
                {/* <Suspense key={`first-${first}`} fallback={<LoadingCharacterInfoBattle key={`loading-first-${first}`} />}> */}
                    <CharacterInfoBattle
                        key={`CharacterInfoBattle-${first}`}
                        selectedCharacter={JSON.parse(JSON.stringify(selectedCharacter1))}
                        // characterId={first}
                        urlParameterToChange={'first'}
                        // classNames={"animate-fightRight"}
                        randomImage={randomImage1}
                    />
                {/* </Suspense> */}
                <Separator className='min-h-[90vh] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
                {/* <Suspense key={`second-${second}`} fallback={<LoadingCharacterInfoBattle key={`loading-second-${second}`} />}> */}
                    <CharacterInfoBattle
                        key={`CharacterInfoBattle-${first}`}
                        // characterId={second}
                        selectedCharacter={JSON.parse(JSON.stringify(selectedCharacter2))}
                        urlParameterToChange={'second'}
                        // classNames={"animate-fightLeft"}
                        randomImage={randomImage2}
                    />
                {/* </Suspense> */}
            </div>
        </>
    )
}