import LoadingCharacterInfoBattle from "@/app/utilities/ui/characters/loaders/LoadingCharacterInfoBattle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
    return (
        <main>
            <div className='w-[80%] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:px-8'>
                <h2 className="text-xl md:text-3xl font-bold">Fight Characters</h2>
                <div className="flex gap-2">
                    <Button>Loading...</Button>
                    <Button>Loading...</Button>
                </div>
            </div>

            <div className='h-full flex justify-center items-center gap-10 w-[90%] md:w-full'>
                <LoadingCharacterInfoBattle />
                <Separator className='h-[20rem] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
                <LoadingCharacterInfoBattle />
            </div>
        </main>
    )
}