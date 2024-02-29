import { Character } from "@/utilities/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import StatString from "../stats/StatString"
import { Separator } from "@/components/ui/separator"
import { Accordion } from "@/components/ui/accordion"
import StatAccordion from "../stats/StatAccordion"
import { AlignmentTranslator, GetColorLogosByPublisher, getAlignmentIcon, publisherIMG } from "@/utilities/lib/charactersUtils"
import { Briefcase, Calendar, CaseSensitive, Globe2, LibraryBig, } from "lucide-react"
import { GrGroup } from "react-icons/gr";
import Image from "next/image"

type FeatureTabBiographyProps = {
    selectedCharacter: Character
}

function FeatureTabBiography({ selectedCharacter }: FeatureTabBiographyProps) {
    const aligmentIcon = getAlignmentIcon(selectedCharacter.biography.alignment, 40)

    return (
        <FeatureTabContainer
            valueTab="Biography"
            extraClassNames="border-2"
        >
            <StatContainer>
                <StatString
                    statName="FullName"
                    statValue={selectedCharacter.biography.fullName}
                    icon={<CaseSensitive size={40} />}
                />
                <Separator />
                <StatString
                    statName="Alignment"
                    statValue={AlignmentTranslator(selectedCharacter.biography.alignment)}
                    icon={aligmentIcon}
                />
                <Separator />
                <div className="flex flex-row justify-between items-center gap-5 my-5">
                    <div className="flex items-center gap-2">
                        {/* <p className='text-2xl md:text-3xl'>📚</p> */}
                        <p className='text-2xl md:text-3xl'><LibraryBig size={40} /></p>
                        <p className="hidden md:block">Publisher</p>
                    </div>
                    <div className="font-bold capitalize"><Image alt="publisherLogo" width={50} height={50} className={`h-10 w-auto ${GetColorLogosByPublisher(selectedCharacter.biography.publisher)}`} src={publisherIMG(selectedCharacter.biography.publisher)} /></div>
                </div>
                <Separator />
                <Accordion type="single" collapsible className="w-full flex flex-col justify-between">
                    <StatAccordion
                        // icon="📅"
                        icon={<Calendar size={40} />}
                        title="First Appearance"
                        content={<p>{selectedCharacter.biography.firstAppearance}</p>}
                    />

                    <StatAccordion
                        // icon="🌎"
                        icon={<Globe2 size={40} />}
                        title="Place Of Birth"
                        content={<p>{selectedCharacter.biography.placeOfBirth}</p>}
                    />

                    <StatAccordion
                        // icon="🔠"
                        icon={<CaseSensitive size={40} />}
                        title="Aliases | Alter Egos"
                        content={<div className="flex gap-2">
                            <p>{selectedCharacter.biography.alterEgos}</p>
                            {selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                return (
                                    <p key={`${currentAlias}-${index}`}>{currentAlias}</p>
                                )
                            }))}
                        </div>}
                    />
                    {/* <StatAccordion
                            // icon="🆎"
                            icon={<CaseSensitiveIcon size={40} />}
                            title="Alter egos"
                            content={<p>{selectedCharacter.biography.alterEgos}</p>}
                        /> */}
                    <StatAccordion
                        // icon="👪"
                        icon={<GrGroup size={40} />}
                        title="Teams"
                        content={<p>{selectedCharacter.connections.groupAffiliation}</p>}
                        dataTest="teams-collapse"
                    />
                    <StatAccordion
                        // icon="🧾"
                        icon={<Briefcase size={40} />}
                        title="Occupation"
                        content={<p>{selectedCharacter.work.occupation}</p>}
                    />
                </Accordion>
            </StatContainer>
        </FeatureTabContainer>
    )
}

export default FeatureTabBiography