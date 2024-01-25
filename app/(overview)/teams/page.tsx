import Teams from "../../utilities/ui/teams/Teams";

export function generateMetadata() {
    return {
        // title: `${searchParams?.team && searchParams?.team !== "All" ? searchParams?.team : searchParams?.universe && searchParams?.universe !== "All" ? searchParams?.universe : "Teams"}`,
        title: `Teams`,
    }
}

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    }
}) {
    
    return (
        <main
        // className='overflow-hidden max-w-[80rem] mx-auto border-x'
        // className='mx-auto border-x'
        >
            {/* <ScrollArea className={`max-w-[80rem] h-[850px] mx-auto border-x`}> */}
            {/* <Hero
                imgLogo={imgLogo}
                imgBg={imgBg}
                alt={altToHero}
                classes={classes}
            /> */}

            {/* <div className="relative w-[80rem] h-[20rem] overflow-hidden bg-background">
                <img src="https://previewsworld.com/SiteImage/MainImage/STL262356.jpg" alt="Avatar" className="object-cover w-full h-full opacity-25" />
                <div className="absolute w-full top-1/2 bottom-1/2 text-white text-xs text-center leading-4">this is a text</div>
            </div> */}

            <div className='w-full flex justify-between items-center gap-5 my-10 px-8'>
                <h2 className="text-3xl font-bold">Explore Teams</h2>

                {/* <div className='flex items-center gap-2'>
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
                </div> */}
            </div>

            <Teams />
            {/* </ScrollArea> */}
        </main>
    );
}