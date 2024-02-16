import FightCharacter from "../../utilities/ui/fight/character/FightCharacter";

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

    const first = searchParams?.first 
    const second = searchParams?.second 

    return (
        <main>
            {/* <FightResults first={first} second={second} /> */}
            <FightCharacter
                first={first}
                second={second}
            />
        </main>
    );
}