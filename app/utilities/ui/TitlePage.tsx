
type TitlePageProps = {
    label: string;
    secondPart?: JSX.Element;
    classesLabel?: string;
    classesContainer?: string;
}

export default function TitlePage({ classesContainer, label, classesLabel, secondPart }: TitlePageProps) {
    return (
        <div className={`w-full flex justify-between items-center ${classesContainer}`}>
            <h2 className={`text-3xl font-bold flex items-center ${classesLabel}`}>{label}</h2>
            {secondPart}
        </div>
    )
}
