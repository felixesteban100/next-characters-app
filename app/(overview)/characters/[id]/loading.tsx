// import Breadcrumbs from "@/app/ui/breadcrumbs";
import TitlePage from "@/app/utilities/ui/TitlePage";
import LoadingCharacterInfo from "@/app/utilities/ui/characters/loaders/LoadingCharacterInfo";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Loading() {
    return (
        <main className='p-0 md:px-5'>
            <TitlePage
                label={'Loading name...'}
                secondPart={<div className="flex gap-2">
                    <Button variant={"ghost"} disabled size={"icon"}><Star /></Button>
                </div>}
            />
            <LoadingCharacterInfo />
        </main>
    )
}