// import Breadcrumbs from "@/app/ui/breadcrumbs";
import LoadingCharacterInfo from "@/app/utilities/ui/characters/loaders/LoadingCharacterInfo";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Loading() {
    return (
        <>
            <div className='w-full flex justify-between items-center gap-5 my-10 px-8' /* className='w-[80%] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:px-8' */>
                {/* <h2 className="text-xl md:text-3xl font-bold">Fight Characters</h2> */}
                <h2 className="text-3xl font-bold animate-pulse">Name</h2>
                <div className="flex gap-2">
                    <Button variant={"ghost"} disabled size={"icon"}><Star/></Button>
                </div>
            </div>
            <LoadingCharacterInfo />
        </>
    )
}