import { Character } from "../../lib/definitions"
import { Separator } from "@/components/ui/separator"
import { FaFistRaised, FaSuperpowers } from "react-icons/fa"
import { Brain, ChevronsUp, Heart} from "lucide-react"
import { GiMuscleUp } from "react-icons/gi";
import StatNumber from "./stats/StatNumber";
import StatContainer from "./stats/StatContainer";


type StatsProps = {
    selectedCharacter: Character
}

export default function Stats({selectedCharacter}: StatsProps) {
    return(
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
    )
}