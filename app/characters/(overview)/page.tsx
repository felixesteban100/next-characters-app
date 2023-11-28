import { Suspense } from 'react';
import Characters from '@/app/ui/characters/Characters';
import { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { QueryOptions } from '@/app/lib/definitions';
import { getQueryOptions } from '@/app/lib/data';
import { getTeamByUniverse } from '@/app/lib/constants';
import { GetColorLogosByPublisher, GetColorOfTheLogoByTeam, publisherIMG } from '@/app/lib/charactersUtils';
import LoadingCharacters from '@/app/ui/characters/loaders/LoadingCharacters';
import Navbar from '@/app/ui/Navbar';
import CharactersNoPagination from '@/app/ui/characters/CharactersNoPagination';
import Hero from '@/app/ui/Hero';
import { organizedComicsProperty } from '@/app/ui/characters/tabs/FeatureTabComics';
import Particles from '@/app/ui/Particles';

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

        pagination?: string;
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
    const withPagination = searchParams?.pagination === undefined ? true : searchParams.pagination === "true"

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

    const queryOptions: QueryOptions = await getQueryOptions(characterName, side, universe, team, gender, race, characterOrFullName)

    const teamInfo = getTeamByUniverse(universe).filter((c) => c.name === team)[0]

    const publisherLogo = publisherIMG(universe)

    const imagePublisherUnkown = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU"

    const imgLogo = teamInfo?.img !== undefined ? teamInfo.img : publisherLogo !== imagePublisherUnkown ? publisherLogo : null
    const imgBg = universe !== "All" ? organizedComicsProperty(null, universe) : [null]
    const altToHero = teamInfo?.img !== undefined ? teamInfo.value : publisherLogo !== imagePublisherUnkown ? universe : null
    const classes = teamInfo?.img !== undefined ? GetColorOfTheLogoByTeam(teamInfo.name) : publisherLogo !== imagePublisherUnkown ? GetColorLogosByPublisher(universe) : null

    return (
        <main className={`max-w-[80rem] z-50 mx-auto bg-background`}>
            <Navbar
                link="/characters"
            />
            <Hero
                imgLogo={imgLogo}
                imgBg={imgBg[/* Math.floor(Math.random() * imgBg.length) */0]}
                alt={altToHero}
                classes={classes}
            />

            <div className='w-full flex justify-center items-center gap-5 my-10'>
                <h2 className="text-3xl font-bold">Explore Characters</h2>
            </div>

            {withPagination === true ?
                <Suspense
                    key={`Characters${characterName + side + universe + team + currentPage + sortBy + sortDirection}`}
                    fallback={<LoadingCharacters />}
                >
                    <Characters
                        queryOptions={queryOptions}
                        currentPage={currentPage}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                </Suspense>
                :
                <Suspense
                    key={`CharactersNoPagination${characterName + side + universe + team + sortBy + sortDirection}`}
                    fallback={<div></div>}
                >
                    <CharactersNoPagination
                        characterName={characterName}
                        side={side}
                        universe={universe}
                        team={team}
                        gender={gender}
                        race={race}
                        characterOrFullName={characterOrFullName}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                </Suspense>
            }
        </main>
    );
}