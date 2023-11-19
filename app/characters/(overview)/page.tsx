import { Suspense } from 'react';
import Characters from '@/app/ui/characters/Characters';
import { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { QueryOptions } from '@/app/lib/definitions';
import { getQueryOptions } from '@/app/lib/data';
import { getTeamByUniverse } from '@/app/lib/constants';
import Image from 'next/image';
import { GetColorLogosByPublisher, GetColorOfTheLogoByTeam, publisherIMG } from '@/app/lib/charactersUtils';
import { Atom } from 'lucide-react';
import LoadingCharacters from '@/app/ui/characters/loaders/LoadingCharacters';

// export const metadata: Metadata = {
//     title: 'Characters',
// };

export function generateMetadata({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        pageCharacters?: string;

        characterOrFullName?: string,
        characterName?: string;
        howMany?: string;
        side?: string;
        universe?: string;
        team?: string;

        sortBy?: sortByType;
        sortDirection?: sortDirectionType;
    }
}) {

    return {
        title: `${searchParams?.team && searchParams?.team !== "All" ? searchParams?.team : searchParams?.universe && searchParams?.universe !== "All" ? searchParams?.universe : "Characters"}`,
    }
}

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        pageCharacters?: string;

        characterOrFullName?: string,
        characterName?: string;
        howMany?: string;
        side?: string;
        universe?: string;
        team?: string;
        gender?: string;
        race?: string;

        sortBy?: sortByType;
        sortDirection?: sortDirectionType;
    }
}) {
    const characterOrFullName = searchParams?.characterOrFullName === "true"
    const characterName = searchParams?.characterName || '';
    // const howMany = searchParams?.howMany || '714'
    const side = searchParams?.side || "All"
    const universe = searchParams?.universe || "All"
    const team = searchParams?.team || "All"
    const gender = searchParams?.gender || "both"
    const race = searchParams?.race || "All"


    const currentPage = Number(searchParams?.pageCharacters) || 1;
    const sortBy = searchParams?.sortBy || '_id';
    const sortDirection = searchParams?.sortDirection || 'desc';

    const queryOptions: QueryOptions = getQueryOptions(characterName, side, universe, team, gender, race, characterOrFullName)

    const teamInfo = getTeamByUniverse(universe).filter((c) => c.name === team)[0]

    const publisherLogo = publisherIMG(universe)

    return (
        <main>
            {/* <div className="w-[80vw] mx-auto hidden md:flex items-center justify-start mt-8 ">
                <h1 className={`text-xl md:text-2xl ${universe === "All" ? "text-primary" : ""}`}>Characters</h1>
                {universe !== "All" && <p>&nbsp; / &nbsp;</p>}
                {universe !== "All" && <h1 className={`${team === "All" ? "text-primary" : ""} text-xl md:text-2xl`}>{universe}</h1>}
                {team !== "All" && <p>&nbsp; / &nbsp;</p>}
                {team !== "All" && <h1 className={`text-primary text-xl md:text-2xl`}>{team}</h1>}
            </div> */}

            {
                teamInfo?.img !== undefined ?
                    <div className='w-full flex justify-center items-center gap-5 my-5'>
                        <Image
                            src={teamInfo.img}
                            width={500}
                            height={500}
                            // className={`group-hover/breadscrum:w-[30vw] w-28 transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                            // className={`h-28 w-auto transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                            className={`h-40 w-auto transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                            alt={teamInfo.value}
                        />
                    </div>
                    :
                    publisherLogo !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU" ?
                        <div className='w-full flex justify-center items-center gap-5 my-5'>
                            <Image
                                src={publisherLogo}
                                width={500}
                                height={500}
                                // className={`group-hover/breadscrum:w-[30vw] w-28 transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                                className={`h-40 w-auto transition-all duration-300 ${GetColorLogosByPublisher(universe)}`}
                                alt='publisherLogo'
                            />
                        </div>
                        :
                        <div className='w-full flex justify-center items-center gap-5 my-5'>
                            {/* <div
                                // className={`h-28 w-48 transition-all duration-300 bg-foreground/10 rounded-lg`}
                                className={`h-28 w-48 transition-all duration-300 rounded-lg`}
                            /> */}
                            <Atom
                                // src='https://i0.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg'
                                // src='https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png'
                                width={500}
                                height={500}
                                // className={`group-hover/breadscrum:w-[30vw] w-28 transition-all duration-300 ${GetColorOfTheLogoByTeam(teamInfo.name)}`}
                                className={`h-40 w-auto animate-spin1 text-primary`}
                                // alt='publisherLogo'
                            />
                        </div>
            }


            <Suspense
                key={`Characters${characterName + side + universe + team + currentPage + sortBy + sortDirection}`}
                fallback={<LoadingCharacters />}
            >
                <Characters
                    queryOptions={queryOptions}
                    currentPage={currentPage}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    universe={universe}
                    team={team}
                />
            </Suspense>
        </main>
    );
}