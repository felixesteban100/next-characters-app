import { CharacterAttributes } from "../../lib/definitions";
import fetchCharactersTop, { removeAttributesAllJustValues } from "../../lib/data";
import { Subtitle, BarChart, Card, AreaChart } from "@tremor/react";
import { FixedAttributeTranslator, getTeamByUniverse } from "../../lib/constants";
import { AlignmentTranslator, getAlignmentIcon, getGenderIcon, getRaceIcon, publisherIMG } from "../../lib/charactersUtils";
// import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

type ChartRankingsProps = {
    fixedAttribute: string;
    numberOfTop: number;
    attributes: CharacterAttributes;
    order: 'asc' | 'desc'
}


// https://www.tremor.so/docs/visualizations/barlist

export default async function ChartRankings({ attributes, fixedAttribute, numberOfTop, order }: ChartRankingsProps) {
    const characters = await fetchCharactersTop(attributes, numberOfTop, fixedAttribute, order)
    const stats: string[] = Object.keys(characters[0].powerstats).map(c => `powerstats.${c}`)

    const attributesCleaner = await removeAttributesAllJustValues(attributes)

    const publisherImg = publisherIMG(attributesCleaner['biography.publisher'])
    const teamImg = getTeamByUniverse(attributesCleaner['biography.publisher']).filter(c => c.name === attributesCleaner['connections.groupAffiliation'])[0]
    const genderIcon = getGenderIcon(attributesCleaner['appearance.gender'] ?? "", 50)
    const raceIcon = getRaceIcon(attributesCleaner['appearance.race'] ?? "", 70)
    const aligmentIcon = getAlignmentIcon(attributesCleaner['biography.alignment'] ?? "", 50)

    return (
        <div className="w-full md:col-span-4 mx-auto">
            <div className="ml-10 my-10 text-xl  flex justify-start items-center gap-3">
                <p>Top {characters.length} {order === "desc" ? 'Highest' : 'Lowest'} {FixedAttributeTranslator[`${fixedAttribute}`]}</p>
                {attributesCleaner['biography.alignment'] && <AttributeCardHover
                    text={AlignmentTranslator(attributesCleaner['biography.alignment'])}
                    content={aligmentIcon}
                />}
                {attributesCleaner['appearance.gender'] && <AttributeCardHover
                    text={attributesCleaner['appearance.gender']}
                    content={genderIcon}
                />}
                {attributesCleaner['appearance.race'] && <AttributeCardHover
                    text={attributesCleaner['appearance.race']}
                    content={raceIcon}
                />}
                {/* {attributesCleaner['biography.publisher'] && <AttributeCardHover
                    text={attributesCleaner['biography.publisher']}
                    content={< width={50} height={50} src={publisherImg} alt={attributesCleaner['biography.publisher']} />}
                />}
                {attributesCleaner['connections.groupAffiliation'] && <AttributeCardHover
                    text={attributesCleaner['connections.groupAffiliation']}
                    content={< width={50} height={50} src={teamImg.img} alt={attributesCleaner['connections.groupAffiliation']} />}
                />} */}
            </div>

            <Card>
                <Subtitle>
                    Just the selected stat compared
                </Subtitle>
                <BarChart
                    className="mt-6"
                    data={JSON.parse(JSON.stringify(characters))}
                    index={"name"}
                    categories={[fixedAttribute]}
                    colors={["primary"]}
                    yAxisWidth={30}
                />
            </Card>
            <br />
            <Card>
                <Subtitle>
                    All their powerstats compared
                </Subtitle>
                <AreaChart
                    className="h-72 mt-4"
                    data={JSON.parse(JSON.stringify(characters))}
                    index={"name"}
                    categories={[...stats]}
                    colors={["indigo-300", "rose-200", "white", "red", "yellow", "green"]}
                    yAxisWidth={30}
                />
            </Card>
        </div>
    )
}

function AttributeCardHover({ content, text }: { content: JSX.Element, text: string }) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {content}
            </HoverCardTrigger>
            <HoverCardContent className="w-50">
                <div className="flex justify-between space-x-4">
                    <h4 className="text-sm font-semibold">{text}</h4>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}