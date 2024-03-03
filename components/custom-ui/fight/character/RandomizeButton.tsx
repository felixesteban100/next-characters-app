"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button";
import { fetchCharacterById } from "@/utilities/data";

export default function RandomizeButton() {
    const searchParams = useSearchParams()
    // const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)

    async function getRandomIdRecursively() {
        const randomCharacter = await fetchCharacterById((Math.floor(Math.random() * 780) + 1).toString())

        if (!randomCharacter) {
            return getRandomIdRecursively()
        }

        return randomCharacter?.id.toString()
    }

    function changeFirstCharacter(randomId: string) {
        params.set('first', randomId);
        replace(`/fightCharacter?${params.toString()}`)
    }

    function changeSecondCharacter(randomId: string) {
        params.set("second", randomId);
        replace(`/fightCharacter?${params.toString()}`)
    }

    return (
        <Button
            onClick={async () => {
                changeFirstCharacter(await getRandomIdRecursively())
                changeSecondCharacter(await getRandomIdRecursively())
            }}
            variant={"outline"}
        >Randomize 🔀</Button>
    )
}