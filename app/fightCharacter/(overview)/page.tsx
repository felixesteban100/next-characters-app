import { getRandomIdRecursively } from "../../utilities/lib/data";
import FightButton from "../../utilities/ui/fight/character/FightButton";
import FightCharacter from "../../utilities/ui/fight/character/FightCharacter";
import RandomizeButton from "../../utilities/ui/fight/character/RandomizeButton";

export function generateMetadata() {
    return {
        title: `Fight Character`,
    }
}

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        first?: string;
        second?: string;
    }
}) {

    const first = searchParams?.first /* ?? await getRandomIdRecursively() */
    const second = searchParams?.second /* ?? await getRandomIdRecursively() */

    // console.log(first)
    // console.log(second)

    return (
        <main>
            <div className='w-[80%] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:px-8'>
                <h2 className="text-xl md:text-3xl font-bold">Fight Characters</h2>
                <div className="flex gap-2">
                    <FightButton first={first} second={second} />
                    <RandomizeButton />
                </div>
            </div>

            <FightCharacter
                first={first}
                second={second}
            />
        </main>
    );
}