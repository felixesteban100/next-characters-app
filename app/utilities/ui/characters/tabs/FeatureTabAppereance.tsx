import { Character } from "@/app/utilities/lib/definitions"
import StatContainer from "../stats/StatContainer"
import FeatureTabContainer from "./FeatureTabContainer"
import StatString from "../stats/StatString"
// import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Eye, Rainbow, Ruler, Weight } from "lucide-react"
import { getGenderIcon, getRaceIcon } from "@/app/utilities/lib/charactersUtils"

type FeatureTabAppereanceProps = {
    selectedCharacter: Character
}

function FeatureTabAppereance({ selectedCharacter }: FeatureTabAppereanceProps) {
    // const allImages: string[] = [
    //     selectedCharacter.images.md,
    //     ...Object.entries(selectedCharacter.images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    // ]

    const genderIcon = getGenderIcon(selectedCharacter.appearance.gender, 40)
    const raceIcon = getRaceIcon(selectedCharacter.appearance.race ?? "", 40)

    return (
        <FeatureTabContainer
            valueTab="Appereance"
            // extraClassNames="md:max-h-[70vh] border-2"
            extraClassNames="border-2"
        >
            <>
                <StatContainer>
                    <StatString
                        statName="Eye Color"
                        statValue={selectedCharacter.appearance.eyeColor}
                        // icon="👀"
                        icon={<Eye size={40} />}
                    />
                    <Separator />

                    <StatString
                        statName="Gender"
                        statValue={selectedCharacter.appearance.gender}
                        icon={genderIcon}
                    />
                    <Separator />

                    <StatString
                        statName="Hair color"
                        statValue={selectedCharacter.appearance.hairColor}
                        icon={
                            /* selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                "👱‍♂️"
                                :
                                selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                    "👱‍♀️"
                                    :
                                    "🙂" */
                            <Rainbow size={40}/>
                        }
                    />
                    <Separator />

                    <StatString
                        statName="Height"
                        statValue={`${selectedCharacter.appearance.height[0]} | ${selectedCharacter.appearance.height[1]}`}
                        // icon="📏"
                        icon={<Ruler size={40} />}
                        />
                    <Separator />

                    <StatString
                        statName="Race"
                        statValue={selectedCharacter.appearance.race ?? "Unknown"}
                        icon={raceIcon}
                    />
                    <Separator />

                    <StatString
                        statName="Weigth"
                        statValue={`${selectedCharacter.appearance.weight[0]} | ${selectedCharacter.appearance.weight[1]}`}
                        // icon="♎"
                        icon={<Weight size={40} />}
                    />
                    <Separator />

                </StatContainer>

                {/* <StatContainer>
                <div className='md:w-[50%] flex justify-center mx-auto'>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
                        {allImages.map((img, index) => {
                            return (
                                <Image
                                    key={`img-${index}`}
                                    className="h-auto w-full"
                                    src={img}
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    alt={`img-${index}`}
                                />
                            )
                        })}
                    </div>
                </div>
            </StatContainer> */}
            </>
        </FeatureTabContainer>
    )
}

export default FeatureTabAppereance