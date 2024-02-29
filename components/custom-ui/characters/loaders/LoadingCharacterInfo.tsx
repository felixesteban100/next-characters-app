import LoadingCharacterFeatures from "./LoadingCharacterFeatures";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LoadingCharacterInfo() {
    return (
        <ScrollArea className="h-[90vh]">
            <div className="mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-5 px-5 lg:p-0">
                <div
                    className="animate-pulse w-full lg:w-[30%] h-[75vh] shadow-xl rounded-md transition-all duration-300 lg:flex-none bg-secondary"
                />

                <div className="flex flex-col w-[100%] lg:w-[70%] mx-auto xl:mt-0 animate-pulse mb-11">
                    <LoadingCharacterFeatures />
                </div>
            </div>
        </ScrollArea>
    )
}