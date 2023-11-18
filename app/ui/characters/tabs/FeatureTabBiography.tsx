import { Character } from "@/app/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import StatString from "../stats/StatString"
import { Separator } from "@/components/ui/separator"
import { Accordion } from "@/components/ui/accordion"
import StatAccordion from "../stats/StatAccordion"
import { GetColorLogosByPublisher, publisherIMG } from "@/app/lib/charactersUtils"
import { Angry, Briefcase, Calendar, CaseSensitive, CaseSensitiveIcon, Globe2, LibraryBig, Meh, Smile } from "lucide-react"
import { GrGroup } from "react-icons/gr";

type FeatureTabBiographyProps = {
    selectedCharacter: Character
}

function FeatureTabBiography({ selectedCharacter }: FeatureTabBiographyProps) {
    return (
        <FeatureTabContainer
                valueTab="Biography"
                extraClassNames="md:max-h-[75vh] border-2 overflow-hidden"
            >
                <StatContainer>
                    <StatString
                        statName="Alignment"
                        statValue={selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}
                        icon={
                            selectedCharacter.biography.alignment === "good" ?
                                // "😃"
                                <Smile size={40}/>
                                :
                                selectedCharacter.biography.alignment === "bad" ?
                                    // "😡"
                                    <Angry size={40}/>
                                    :
                                    // "😐"
                                    < Meh size={40}/>

                        }
                    />
                    <Separator />
                    <div className="flex flex-row justify-between items-center gap-5 my-5">
                        <div className="flex items-center gap-2">
                            {/* <p className='text-2xl md:text-3xl'>📚</p> */}
                            <p className='text-2xl md:text-3xl'><LibraryBig size={40}/></p>
                            <p className="hidden md:block">Publisher</p>
                        </div>
                        <div className="font-bold capitalize"><img className={`h-10 ${GetColorLogosByPublisher(selectedCharacter.biography.publisher)}`} src={publisherIMG(selectedCharacter.biography.publisher)} alt="publisher" /></div>
                    </div>
                    <Separator />
                    <Accordion type="single" collapsible className="w-full">
                        <StatAccordion
                            // icon="📅"
                            icon={<Calendar size={40}/>}
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
                            title="Aliases"
                            content={selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                return (
                                    <p key={`${currentAlias}-${index}`}>{currentAlias}</p>
                                )
                            }))}
                        />
                        <StatAccordion
                            // icon="🆎"
                            icon={<CaseSensitiveIcon size={40} />}
                            title="Alter egos"
                            content={<p>{selectedCharacter.biography.alterEgos}</p>}
                        />
                        <StatAccordion
                            // icon="👪"
                            icon={<GrGroup size={40} />}
                            title="Teams"
                            content={<p>{selectedCharacter.connections.groupAffiliation}</p>}
                            dataTest="teams-collapse"
                        />
                        <StatAccordion
                            // icon="🧾"
                            icon={<Briefcase size={40}/>}
                            title="Occupation"
                            content={<p>{selectedCharacter.work.occupation}</p>}
                        />
                    </Accordion>
                </StatContainer>
            </FeatureTabContainer>
    )
}

export default FeatureTabBiography