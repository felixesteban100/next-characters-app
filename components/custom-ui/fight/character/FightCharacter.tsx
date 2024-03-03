import CharacterInfoBattle from '../../characters/CharacterInfoBattle'
import { Separator } from '@/components/ui/separator'

import FightButton from "@/components/custom-ui/fight/character/FightButton";
import RandomizeButton from './RandomizeButton';
import { fetchCharacterById } from '@/utilities/data';
import { emptyCharacter } from '@/utilities/constants';
import { getRandomImage } from '@/utilities/charactersUtils';
import TitlePage from '../../TitlePage';

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
            <TitlePage
                label={'Fight Characters'}
                classesContainer={"pb-11"}
                secondPart={<div className="flex gap-2">
                <FightButton
                    first={first}
                    imageKey1={randomImage1.selectedRandomImage.key}
                    second={second}
                    imageKey2={randomImage2.selectedRandomImage.key}
                />
                <RandomizeButton />
            </div>}
            />

            <div className='h-full flex justify-center items-start gap-2 md:gap-10 w-full overflow-visible'>
                <CharacterInfoBattle
                    key={`CharacterInfoBattle-${first}`}
                    selectedCharacter={JSON.parse(JSON.stringify(selectedCharacter1))}
                    urlParameterToChange={'first'}
                    randomImage={randomImage1}
                />
                <Separator className='min-h-[90vh] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
                <CharacterInfoBattle
                    key={`CharacterInfoBattle-${first}`}
                    selectedCharacter={JSON.parse(JSON.stringify(selectedCharacter2))}
                    urlParameterToChange={'second'}
                    randomImage={randomImage2}
                />
            </div>
        </>
    )
}