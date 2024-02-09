'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';
import { ALLUNIVERSE, UNIVERSES_WITH_TEAMS, getTeamByUniverse } from '../../lib/constants';
import { GetColorLogosByPublisher, GetColorOfTheLogoByTeam, publisherIMG } from '../../lib/charactersUtils';


export type UniversesWithItsTeams = {
    info: {
        name: string,
        value: string,
    },
    img: string,
    teams: { name: string, value: string, img: string }[],
}

export default function Teams() {
    const allUniversesWithItsTeams: UniversesWithItsTeams[] = ALLUNIVERSE.slice(1, ALLUNIVERSE.length - 1).reduce((allUniverses, universe) => {
        if (UNIVERSES_WITH_TEAMS.includes(universe.value)) {
            allUniverses.push({
                info: universe,
                img: publisherIMG(universe.value),
                teams: getTeamByUniverse(universe.value)
            })
        }

        return allUniverses
    }, new Array())

    return (
        <div
            // className='mx-auto flex flex-col justify-between mb-5'
            className='px-8 flex flex-col gap-10 bg-transparent'
        >
            <div
            // className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'
            // use accordion element from shadcnUI
            >
                <Accordion type="single" collapsible className="w-full">
                    {allUniversesWithItsTeams.map(universe => {
                        return (
                            <AccordionItem key={universe.info.value} value={universe.info.value}>
                                <AccordionTrigger>
                                    <Image
                                        src={universe.img}
                                        width={500}
                                        height={500}
                                        alt={universe.info.value}
                                        className={`w-[20%] h-auto mx-auto ${GetColorLogosByPublisher(universe.info.value)}`}
                                        unoptimized
                                    />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='grid grid-cols-3 items-center'>
                                        {universe.teams.map((team) => {
                                            return (
                                                <Link
                                                    key={team.value}
                                                    href={`/characters?universe=${universe.info.value}&team=${team.value}&howMany=700&pagination=${false}`}
                                                    className='group/publisher'
                                                >
                                                    <Image
                                                        src={team.img}
                                                        height={500}
                                                        width={500}
                                                        alt={team.name}
                                                        className={`w-[80%] h-auto col-span-1 ${GetColorOfTheLogoByTeam(team.value)}`}
                                                        unoptimized
                                                    />
                                                    <p className='group-hover/publisher:underline'>{team.name}</p>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
                {/* <CharactersContainer>
                    <>
                        {allUniversesWithItsTeams.map((currentUniverses, index) => {
                            return (
                                <TeamComponent
                                    key={currentUniverse.slug}
                                    currentTeam={currentTeam}
                                />
                            )
                        })}
                    </>
                </CharactersContainer> */}
            </div>
        </div>
    )
}