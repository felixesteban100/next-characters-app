import { Character } from "@/app/utilities/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import Stats from "../Stats"


type FeatureTabStatsProps = {
    selectedCharacter: Character
}

function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
        <FeatureTabContainer
            valueTab="Stats"
            extraClassNames="border-2"
        >
            <Stats selectedCharacter={selectedCharacter}/>
        </FeatureTabContainer>
    )
}

export default FeatureTabStats