import { FixedAttributeTranslator } from "@/utilities/lib/constants";
import LoaderSpinner from "@/components/custom-ui/LoaderSpinner";
import ChartRankings from "@/components/custom-ui/rankings/ChartRankings";
import FilterTops from "@/components/custom-ui/rankings/FilterTops";
import { LoadingChartRankings } from "@/components/custom-ui/rankings/LoadingChartRankings";
import Tops from "@/components/custom-ui/rankings/Tops";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Settings2 } from "lucide-react";
import { Suspense } from "react";
import type { Metadata } from 'next'
import TitlePage from "@/components/custom-ui/TitlePage";

export const metadata: Metadata = {
    title: 'Rankings Characters',
}
/* export function generateMetadata() {
    return {
        title: `Rankins Characters`,
    }
} */

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        fixedAttribute?: string;
        groupAffiliation?: string;
        alignment?: string;
        race?: string;
        publisher?: string;
        gender?: string;
        numberOfTop?: string;
        order?: string;
    }
}) {
    const fixedAttribute = searchParams?.fixedAttribute ?? 'powerstats.power'
    const groupAffiliation = searchParams?.groupAffiliation ?? 'All'
    const alignment = searchParams?.alignment ?? 'All'
    const race = searchParams?.race ?? 'All'
    const publisher = searchParams?.publisher ?? 'All'
    const gender = searchParams?.gender ?? 'both'
    const numberOfTop = parseInt(searchParams?.numberOfTop ?? '10')
    const order = searchParams?.order === 'asc' ? 'asc' : 'desc'

    return (
        <main>
            <TitlePage
                label={'Rankings Characters'}
                secondPart={<div className="flex gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={'outline'} size={"icon"}><Settings2 /></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Features</SheetTitle>
                                <SheetDescription>
                                    Here we can filter the characters for the top
                                </SheetDescription>
                                <FilterTops />
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>}
            />

            <Suspense fallback={<LoadingChartRankings />}>
                <ChartRankings
                    fixedAttribute={fixedAttribute}
                    attributes={{
                        'connections.groupAffiliation': groupAffiliation,
                        'biography.alignment': alignment,
                        'appearance.gender': gender,
                        'appearance.race': race,
                        'biography.publisher': publisher
                    }}
                    numberOfTop={numberOfTop}
                    order={order}
                />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center my-10"><LoaderSpinner /></div>}>
                <Tops
                    fixedAttribute={fixedAttribute}
                    attributes={{
                        'connections.groupAffiliation': groupAffiliation,
                        'biography.alignment': alignment,
                        'appearance.gender': gender,
                        'appearance.race': race,
                        'biography.publisher': publisher
                    }}
                    numberOfTop={numberOfTop}
                    order={order}
                />
            </Suspense>
        </main>
    );
}