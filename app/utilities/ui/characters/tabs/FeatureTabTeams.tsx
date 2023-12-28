import { Character } from "@/app/utilities/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import { getTeamByUniverse } from "@/app/utilities/lib/constants"
import Link from "next/link"
import Image from "next/image"
import { GetColorOfTheLogoByTeam } from "@/app/utilities/lib/charactersUtils"

type FeatureTabTeamsProps = {
    selectedCharacter: Character,
    withPagination: boolean
}

function FeatureTabTeams({ selectedCharacter, withPagination }: FeatureTabTeamsProps) {

    return (
        <div>
            <FeatureTabContainer
                valueTab="Teams"
                extraClassNames="border-2"
            >
                <StatContainer>
                    {
                        getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                            <div
                                className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5 pb-10"
                            >
                                {
                                    getTeamsImagesByCharacter(selectedCharacter).map((teamFound) => {
                                        return (
                                            <Link
                                                // href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700`}
                                                href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}&howMany=700&pagination=${withPagination}`}
                                                key={teamFound.name}
                                                className="mt-5 mx-auto flex gap-1 flex-col cursor-pointer group/items"
                                                data-tip={teamFound.name}
                                            >
                                                <Image
                                                    className={`${GetColorOfTheLogoByTeam(teamFound.name)}`}
                                                    width={500}
                                                    height={500}
                                                    src={teamFound?.img}
                                                    alt={teamFound?.name}
                                                />
                                                <p className="font-semibold text-primary text-xl group-hover/items:underline">{teamFound?.name}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5">
                                <div className="text-xl font-bold text-center my-5">No teams</div>
                            </div>
                    }
                </StatContainer>
            </FeatureTabContainer>

        </div>
    )
}

export function getTeamsImagesByCharacter(selectedCharacter: Character) {
    const imagesget = getTeamByUniverse(
        selectedCharacter.biography.publisher
    ).reduce((acc, teamToFind) => {
        const teamsByCharacter =
            selectedCharacter.connections.groupAffiliation.split(/,|;/);
        let imageTeam;

        function findWordBetweenSpaces(
            inputString: string,
            targetWord: string
        ): boolean {
            const regex = new RegExp(`\\b${targetWord}\\b`);
            return regex.test(inputString);
        }

        teamsByCharacter.forEach((team) => {
            // if (team.trim().toLowerCase().includes(teamToFind.value.toLowerCase()) && teamToFind.img) {
            if (
                findWordBetweenSpaces(
                    team.trim().toLowerCase(),
                    teamToFind.value.toLowerCase().trim()
                )
                /* (team.trim().toLowerCase() === teamToFind.value.toLowerCase() ||
                  (
                    (
                      team.trim().toLowerCase().includes(` ${teamToFind.value.toLowerCase()} `)
                      ||
                      team.trim().toLowerCase().includes(` ${teamToFind.value.toLowerCase()},`)
                      &&
                      team.trim().toLowerCase().includes(`${teamToFind.value.toLowerCase()}`)
                    )
                  )
                )
                && teamToFind.img */
            ) {
                imageTeam = teamToFind;
            }
        });
        if (imageTeam) acc.push(imageTeam);
        return acc;
    }, new Array());

    const uniqueIds = new Set();
    const filteredArray = imagesget.filter((obj) => {
        const value = obj.value;
        if (value !== undefined && !uniqueIds.has(value)) {
            uniqueIds.add(value);
            return true;
        }
        return false;
    });

    return filteredArray;
}

export default FeatureTabTeams