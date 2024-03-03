import { fetchCharacterById } from "@/utilities/data";
import { getCharacterStatsNumber, getWinnerBetweenTwoCharacters } from "@/utilities/charactersUtils";

type FightButtonProps = {
    first: string | undefined;
    second: string | undefined;
}

export default async function FightResults({ first, second }: FightButtonProps) {
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

    return (
        <div className="flex gap-5 justify-start items-center my-10 ml-5">
            <p className="text-lg md:text-5xl text-center">Winner 👑</p>
            <p className="text-md md:text-2xl animate-fade-in text-center">
                {getWinnerBetweenTwoCharacters(selectedCharacter1, selectedCharacter2, firstStats, secondStats)}
            </p>
        </div>
    )
}