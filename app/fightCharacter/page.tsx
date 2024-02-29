import { Suspense } from "react";
import FightCharacter from "@/components/custom-ui/fight/character/FightCharacter";
import LoadingFightingCharacters from "@/components/custom-ui/characters/loaders/LoadingFightingCharacters";

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
            <Suspense key={`${first}-${second}`} fallback={<LoadingFightingCharacters />} >
                <FightCharacter
                    first={first}
                    second={second}
                />
            </Suspense>
        </main>
    );
}