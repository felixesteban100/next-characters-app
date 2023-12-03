import { Suspense } from 'react';
import Characters from '@/app/ui/characters/Characters';
import FilterCharacters, { sortByType, sortDirectionType } from '@/app/ui/characters/FilterCharacters';
import { QueryOptions } from '@/app/lib/definitions';
import { getQueryOptions } from '@/app/lib/data';
import { getTeamBackgroundImageByUniverse, getTeamByUniverse } from '@/app/lib/constants';
import { GetColorLogosByPublisher, GetColorOfTheLogoByTeam, publisherIMG } from '@/app/lib/charactersUtils';
import LoadingCharacters from '@/app/ui/characters/loaders/LoadingCharacters';
import CharactersNoPagination from '@/app/ui/characters/CharactersNoPagination';
import Hero from '@/app/ui/Hero';
import { organizedComicsProperty } from '@/app/ui/characters/tabs/FeatureTabComics';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import PaginationToggle from '@/app/ui/characters/PaginationToggle';

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

    const allTeamsImagesByUniverse = getTeamBackgroundImageByUniverse(universe)

    const teamImage = allTeamsImagesByUniverse !== undefined ? allTeamsImagesByUniverse.find(c => c.name === team) : undefined

    const imgLogo = teamInfo?.img !== undefined ? teamInfo.img : publisherLogo !== imagePublisherUnkown ? publisherLogo : null
    const imgBg = teamImage !== undefined ? teamImage.img : universe !== "All" ? organizedComicsProperty(null, universe)[0] : null
    const altToHero = teamInfo?.img !== undefined ? teamInfo.value : publisherLogo !== imagePublisherUnkown ? universe : null
    const classes = teamInfo?.img !== undefined ? GetColorOfTheLogoByTeam(teamInfo.name) : publisherLogo !== imagePublisherUnkown ? GetColorLogosByPublisher(universe) : null

    return (
        <main className='overflow-hidden'>
            {/* <Navbar
                link="/characters"
            /> */}
            <ScrollArea className={`max-w-[80rem] h-[850px] mx-auto border-x`}>
                <Hero
                    imgLogo={imgLogo}
                    imgBg={imgBg}
                    alt={altToHero}
                    classes={classes}
                />

                <div className='w-full flex justify-between items-center gap-5 my-10 px-8'>
                    <h2 className="text-3xl font-bold">Explore Characters</h2>

                    <div className='flex items-center gap-2'>
                        <PaginationToggle />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={'outline'} size={'icon'}><SlidersHorizontal size={20} /></Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Features</SheetTitle>
                                    <SheetDescription>
                                        Here we can filter the characters
                                    </SheetDescription>
                                    <FilterCharacters
                                        link='/characters'
                                    />
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
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
            </ScrollArea>
        </main>
    );
}