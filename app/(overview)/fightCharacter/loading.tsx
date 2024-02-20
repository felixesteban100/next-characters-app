import TitlePage from "@/app/utilities/ui/TitlePage";
import LoadingCharacterInfoBattle from "@/app/utilities/ui/characters/loaders/LoadingCharacterInfoBattle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
    return (
        <main>
            <TitlePage
                label={'Fight Characters'}
                secondPart={<div className="flex gap-2">
                <Button>Loading...</Button>
                <Button>Loading...</Button>
            </div>}
            />

            <div className='h-full flex justify-center items-start gap-10 w-full'>
                <LoadingCharacterInfoBattle />
                <Separator className='h-[20rem] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
                <LoadingCharacterInfoBattle />
            </div>
        </main>
    )
}