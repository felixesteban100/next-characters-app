import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchCharacterById } from "@/app/utilities/lib/data";
import { Character } from "@/app/utilities/lib/definitions";
import Image from "next/image";
import { WithId } from "mongodb";
import { getCharacterStatsNumber, getWinnerBetweenTwoCharacters } from "@/app/utilities/lib/charactersUtils";
import { DrawerDialogDemo } from "../../dialog-drawer";

type FightButtonProps = {
    first: string | undefined;
    imageKey1: string;
    second: string | undefined;
    imageKey2: string;
}

export default async function FightButton({ first, second, imageKey1, imageKey2 }: FightButtonProps) {
    if (!first || !second) {
        return <div className="flex items-center">Select two characters</div>
    }

    const selectedCharacter1 = await fetchCharacterById(first)
    const selectedCharacter2 = await fetchCharacterById(second)

    if (!selectedCharacter1 || !selectedCharacter2) {
        return <div>Error fetchCharacterById</div>
    }

    const firstStats = getCharacterStatsNumber(selectedCharacter1)
    const secondStats = getCharacterStatsNumber(selectedCharacter2)


    const winner: string = getWinnerBetweenTwoCharacters(selectedCharacter1, selectedCharacter2, firstStats, secondStats)

    return (
        <DrawerDialogDemo
            title="Winner"
            description={winner}
            trigger={<Button variant={"secondary"}>Fight ⚔</Button>}
            classNamesDialog="sm:max-w-[800px]"
        >
            <div className='h-full flex flex-row justify-center gap-5 md:gap-10 p-5'>
                <CharacterInfoForMatch
                    selectedCharacter={selectedCharacter1}
                    stats={firstStats}
                    classNames={"animate-fightRight"}
                    imageKey={imageKey1}
                />
                <Separator className='h-[100%] w-[2px] md:w-[0.5rem]' orientation='vertical' />
                <CharacterInfoForMatch
                    selectedCharacter={selectedCharacter2}
                    stats={secondStats}
                    classNames={"animate-fightLeft"}
                    imageKey={imageKey2}
                />
            </div>
        </DrawerDialogDemo>

    )
}

/* <Dialog>
            
            <DialogTrigger asChild>

            </DialogTrigger>
            <DialogContent className="max-w-md min-h-[75vh] md:max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-5xl text-center"></DialogTitle>
                    <DialogDescription className="text-2xl animate-fade-in text-center">

                    </DialogDescription>
                </DialogHeader>


            </DialogContent>
        </Dialog> */

type CharacterInfoForMatchProps = {
    selectedCharacter: WithId<Character>,
    stats: number;
    classNames: string;
    imageKey: string
}

async function CharacterInfoForMatch({ selectedCharacter, stats, classNames, imageKey }: CharacterInfoForMatchProps) {
    return (
        <div
            className={`flex flex-col gap-5 ${classNames}`}
        >
            <div className="flex flex-col gap-5 justify-center items-start">
                <p className="text-sm md:text-2xl">{selectedCharacter.id} - {selectedCharacter.name}</p>
                <p>Stats: {stats} %</p>
            </div>
            <div className="relative overflow-hidden box characterId">
                <Image
                    width={500}
                    height={500}
                    className="w-[20rem] h-[35rem] md:w-[35rem] md:h-[35rem] object-cover object-top"
                    src={selectedCharacter.images[imageKey]}
                    alt={selectedCharacter.name}
                    loading="lazy"
                />
            </div>
        </div>
    )
}