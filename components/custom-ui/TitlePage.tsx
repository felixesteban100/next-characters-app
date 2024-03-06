import { cn } from "@/lib/utils";

type TitlePageProps = {
    label: string;
    secondPart?: JSX.Element;
    classesLabel?: string;
    classesContainer?: string;
}

export default function TitlePage({ classesContainer, label, classesLabel, secondPart }: TitlePageProps) {
    return (
        <div
            // className={cn(`w-full flex justify-between items-center`, classesContainer)}
            className={`w-full flex justify-between items-center ${classesContainer}`}
        >
            <h2
                // className={cn(` text-background text-4xl font-bold flex items-center `, classesLabel, "text-stroke-title-page")}
                //text-stroke-title-page
                className={`text-stroke-title-page  text-4xl font-bold flex items-center ${classesLabel ?? 'text-foreground'}`}
            >
                {label}
            </h2>
            {secondPart}
        </div>
    )
}
