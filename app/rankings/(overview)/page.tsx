import FilterTops from "@/app/utilities/ui/rankings/FilterTops";
import Tops from "@/app/utilities/ui/rankings/Tops";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function generateMetadata() {
    return {
        title: `Rankins Characters`,
    }
}

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
            <div className='w-[80%] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:px-8'>
                <h2 className="text-xl md:text-3xl font-bold">Rankings Characters</h2>
                <div className="flex gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={'outline'}>Top Selector</Button>
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
                    
                </div>
            </div>


            {/* <Graph /> */}

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
        </main>
    );
}