import { Character } from "@/app/utilities/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import StatNumber from "../stats/StatNumber"
import { Separator } from "@/components/ui/separator"
import { FaFistRaised, FaSuperpowers } from "react-icons/fa"
import { Brain, ChevronsUp, Heart} from "lucide-react"
import { GiMuscleUp } from "react-icons/gi";

type FeatureTabStatsProps = {
    selectedCharacter: Character
}

function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
        <FeatureTabContainer
            valueTab="Stats"
            extraClassNames="border-2"
        >
            <StatContainer>
                <StatNumber
                    statName="Combat"
                    statValue={selectedCharacter.powerstats.combat}
                    // icon="👊"
                    icon={<FaFistRaised size={40} />}
                />
                <Separator />
                <StatNumber
                    statName="Durability"
                    statValue={selectedCharacter.powerstats.durability}
                    // icon="💗"
                    icon={<Heart size={40}/>}
                />
                <Separator />
                <StatNumber
                    statName="Intelligence"
                    statValue={selectedCharacter.powerstats.intelligence}
                    // icon="🧠"
                    icon={<Brain size={40}/>}
                />
                <Separator />

                <StatNumber
                    statName="Power"
                    statValue={selectedCharacter.powerstats.power}
                    // icon="🔆"
                    icon={<FaSuperpowers size={40}/>}
                />
                <Separator />

                <StatNumber
                    statName="Speed"
                    statValue={selectedCharacter.powerstats.speed}
                    // icon="⚡"
                    icon={<ChevronsUp size={40}/>}
                />
                <Separator />

                <StatNumber
                    statName="Strength"
                    statValue={selectedCharacter.powerstats.strength}
                    // icon="💪"
                    icon={<GiMuscleUp size={40}/>}
                />
                <Separator />
            </StatContainer>
        </FeatureTabContainer>
    )
}

export default FeatureTabStats