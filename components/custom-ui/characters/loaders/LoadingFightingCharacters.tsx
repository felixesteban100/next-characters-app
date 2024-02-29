import TitlePage from "@/components/custom-ui/TitlePage";
import LoadingCharacterInfoBattle from "@/components/custom-ui/characters/loaders/LoadingCharacterInfoBattle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LoadingFightingCharacters() {
    return (
        <>
            <TitlePage
                label={'Fight Characters'}
                classesContainer={"pb-11"}
                secondPart={<div className="flex gap-2">
                <Button>Loading...</Button>
                <Button>Loading...</Button>
            </div>}
            />

            <div className='h-full flex justify-center items-start gap-2 md:gap-10 w-full overflow-visible'>
                <LoadingCharacterInfoBattle />
                <Separator className='h-[20rem] md:h-[100vh] w-[0.2rem]' orientation='vertical' />
                <LoadingCharacterInfoBattle />
            </div>
        </>
    )
}