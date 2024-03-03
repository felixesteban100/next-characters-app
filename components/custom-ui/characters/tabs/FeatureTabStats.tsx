import FeatureTabContainer from "./FeatureTabContainer"
import Stats from "../Stats"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { getRandomIdRecursively } from "@/utilities/data";

type FeatureTabStatsProps = {
    selectedCharacter: Character
}

export default async function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
        <FeatureTabContainer
            valueTab="Stats"
            extraClassNames="border-2"
        >
            <>
                <Link className="w-full flex justify-center mt-5" href={`/fightCharacter?first=${selectedCharacter.id}&second=${await getRandomIdRecursively()}`}>
                    <Button variant={"link"}>Fight using {selectedCharacter.name}</Button>
                </Link>
                <Stats selectedCharacter={selectedCharacter} />
            </>
        </FeatureTabContainer>
    )
}
