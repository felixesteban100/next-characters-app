import LoadingCharacters from "@/app/ui/characters/loaders/LoadingCharacters";
import LoadingPaginationCharacters from "@/app/ui/characters/loaders/LoadingPaginationCharacters";

export default function Loading() {
    return (
        <main>
            <div className="w-[80vw] mx-auto flex items-center justify-start mt-5">
                <h1 className={`text-xl md:text-2xl`}>Characters</h1>
            </div>

            <div className='w-full flex justify-center items-center gap-5 my-5'>
                <div
                    className={`h-28 w-48 transition-all duration-300 bg-foreground/10 rounded-lg animate-pulse`}
                />
            </div>

            <div className='mx-auto w-[90vw] flex flex-col justify-between'>
                <div className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'>
                    <LoadingCharacters />

                    <div className="mt-5 flex w-full justify-center animate-pulse">
                        <LoadingPaginationCharacters />
                    </div>
                </div>
            </div>
        </main>
    )
}