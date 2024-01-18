import React, { Suspense } from 'react'
import CharacterInfoBattle from '../../characters/CharacterInfoBattle'
import { Separator } from '@/components/ui/separator'
import LoadingCharacterInfoBattle from '../../characters/loaders/LoadingCharacterInfoBattle'

type FightCharacterProps = {
    first: string | undefined
    second: string | undefined
}

function FightCharacter({ first, second }: FightCharacterProps) {
    return (
        <div className='h-full flex justify-center items-center gap-10 w-[90%] md:w-full'>
            <Suspense fallback={<LoadingCharacterInfoBattle urlParameterToChange={'first'}/>}>
                <CharacterInfoBattle
                    characterId={first}
                    urlParameterToChange={'first'}
                />
            </Suspense>
            <Separator className='h-[20rem] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
            <Suspense fallback={<LoadingCharacterInfoBattle urlParameterToChange={'second'}/>}>
                <CharacterInfoBattle
                    characterId={second}
                    urlParameterToChange={'second'}
                />
            </Suspense>
        </div>
    )
}

export default FightCharacter