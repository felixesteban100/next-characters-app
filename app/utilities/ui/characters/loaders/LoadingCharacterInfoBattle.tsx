import Image from "next/image";
import Stats from "../Stats";
import { emptyCharacter } from "@/app/utilities/lib/constants";

// type CharacterInfoBattleProps = {
//     urlParameterToChange: string
// }

export default async function LoadingCharacterInfoBattle(/* { urlParameterToChange }: CharacterInfoBattleProps */) {
    return (
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <div
                className="flex flex-col gap-5"
            >

                <div className="flex flex-col gap-5 justify-center items-start">
                    <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
                        <p className="text-lg md:text-2xl">{emptyCharacter.name}</p>
                        <p className="text-lg md:text-2xl bg-secondary p-1 rounded-md w-fit">{0} %</p>
                    </div>
                    <div className="w-full flex justify-between ">
                        <div className="flex gap-2 items-center md:ml-5">
                            <p>.....</p>
                            <div
                                className="bg-secondary w-[2rem] h-[2rem] animate-pulse rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="bg-secondary rounded-md w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] animate-pulse"
                />
            </div>
            <div className="w-[80%] animate-pulse">
                <Stats selectedCharacter={JSON.parse(JSON.stringify(emptyCharacter))} />
            </div>
        </div >
    )
}