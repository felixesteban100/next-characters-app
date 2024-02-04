import { Suspense } from 'react'
import CharacterInfoBattle from '../../characters/CharacterInfoBattle'
import { Separator } from '@/components/ui/separator'
import LoadingCharacterInfoBattle from '../../characters/loaders/LoadingCharacterInfoBattle'

type FightCharacterProps = {
    first: string | undefined
    second: string | undefined
}

function FightCharacter({ first, second }: FightCharacterProps) {
    return (
        <div className='h-full flex justify-center items-start gap-2 md:gap-10 w-full'>
            {/* WHY THE HECK THIS SUSPENSE AIN'T WORKING??? -_- */}

            <Suspense key={`first-${first}`} fallback={<LoadingCharacterInfoBattle key={`loading-first-${first}`}/>}>
                <CharacterInfoBattle
                    key={`CharacterInfoBattle-${first}`}
                    characterId={first}
                    urlParameterToChange={'first'}
                    classNames={"animate-fightRight"}
                />
            </Suspense>
            <Separator className='min-h-[90vh] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
            <Suspense key={`second-${second}`} fallback={<LoadingCharacterInfoBattle key={`loading-second-${second}`}/>}>
                <CharacterInfoBattle
                    key={`CharacterInfoBattle-${first}`}
                    characterId={second}
                    urlParameterToChange={'second'}
                    classNames={"animate-fightLeft"}
                />
            </Suspense>
        </div>
    )
}

export default FightCharacter