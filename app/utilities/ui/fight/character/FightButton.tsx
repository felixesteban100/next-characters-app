import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LoadingCharacterInfoBattle from "../../characters/loaders/LoadingCharacterInfoBattle";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { fetchCharacterById } from "@/app/utilities/lib/data";
import { Character } from "@/app/utilities/lib/definitions";
import Image from "next/image";
import { WithId } from "mongodb";

type FightButtonProps = {
    first: string;
    second: string;
}

export default async function FightButton({ first, second }: FightButtonProps) {

    const selectedCharacter1 = await fetchCharacterById(first)
    const selectedCharacter2 = await fetchCharacterById(second)

    if (!selectedCharacter1 || !selectedCharacter2) {
        return <div>Error</div>
    }

    const firstStats = getCharacterStatsNumber(selectedCharacter1)
    const secondStats = getCharacterStatsNumber(selectedCharacter2)

    function getWinnerBetweenTwoCharacters(first: Character, second: Character) {
        return firstStats > secondStats ? first.name : second.name
    }

    function getCharacterStatsNumber(selectedCharacter: Character) {
        return Math.floor(Object.entries(selectedCharacter.powerstats).reduce((acc, [key, value]) => {
            acc += value
            return acc
        }, 0) / 6)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Fight ⚔</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm md:sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-5xl text-center">Winner</DialogTitle>
                    <DialogDescription className="text-2xl animate-fade-in text-center">
                        {getWinnerBetweenTwoCharacters(selectedCharacter1, selectedCharacter2)}
                    </DialogDescription>
                </DialogHeader>

                <div className='h-full flex justify-center items-center gap-10'>
                    <Suspense fallback={<LoadingCharacterInfoBattle urlParameterToChange={'first'} />}>
                        <CharacterInfoForMatch
                            selectedCharacter={selectedCharacter1}
                            stats={firstStats}
                            classNames={"animate-fightRight"}
                        />
                    </Suspense>
                    <Separator className='h-[100%] w-[0.5rem]' orientation='vertical' />
                    <Suspense fallback={<LoadingCharacterInfoBattle urlParameterToChange={'second'} />}>
                        <CharacterInfoForMatch
                            selectedCharacter={selectedCharacter2}
                            stats={secondStats}
                            classNames={"animate-fightLeft"}
                        />
                    </Suspense>
                </div>
            </DialogContent>
        </Dialog>
    )
}

type CharacterInfoForMatchProps = {
    selectedCharacter: WithId<Character>,
    stats: number;
    classNames: string
}

async function CharacterInfoForMatch({ selectedCharacter, stats, classNames }: CharacterInfoForMatchProps) {
    return (
        <div
            className={`flex flex-col gap-5 ${classNames}`}
        >
            <div className="flex flex-col gap-5 justify-center items-start">
                <p className="text-2xl">{selectedCharacter.id} - {selectedCharacter.name}</p>
                <p>Stats: {stats} %</p>
                {/* <div className="flex gap-2 items-center ml-5">
                    <p>{selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</p>
                    <Image alt={selectedCharacter.biography.publisher} width={100} height={100} className="w-auto h-[2rem]" src={publisherIMG(selectedCharacter.biography.publisher)} />
                </div> */}
                {/* <p>Aligmnent: {selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</p> */}
                {/* <div className="flex gap-2 items-center"><p>Universe:</p> <Image alt={selectedCharacter.biography.publisher} width={100} height={100} className="w-auto h-[2rem]" src={publisherIMG(selectedCharacter.biography.publisher)} /></div> */}
            </div>
            <Image
                width={500}
                height={500}
                // className={`transition-all duration-300 absolute w-[95%] h-[95%] object-cover rounded-md right-[15px] top-[15px] md:object-top`}
                // className={`transition-all duration-300 absolute w-[100%] h-[100%] object-cover rounded-md md:object-top`}
                className="w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] object-cover object-top"
                src={selectedCharacter.images.md}
                alt={selectedCharacter.name}
                loading="lazy"
            />
        </div>
    )
}