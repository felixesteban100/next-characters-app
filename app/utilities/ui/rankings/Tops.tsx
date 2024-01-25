import { Button } from "@/components/ui/button";
import { FixedAttributeTranslator } from "../../lib/constants";
import fetchCharactersTop, { removeAttributesAllJustValues } from "../../lib/data";
import { CharacterAttributes } from "../../lib/definitions";
import Link from "next/link";
import Image from "next/image";

type TopsProps = {
    fixedAttribute: string;
    numberOfTop: number;
    attributes: CharacterAttributes;
    order: 'asc' | 'desc'
}

export default async function Tops({ attributes, fixedAttribute, numberOfTop, order }: TopsProps) {
    const characters = await fetchCharactersTop(attributes, numberOfTop, fixedAttribute, order)

    const cleanAttributes = await removeAttributesAllJustValues(attributes)
    const arrayCleanAttributes = Object.entries(cleanAttributes)

    return (
        <div>
            <div className="flex justify-center items-center my-5">
                <p>Top {numberOfTop} {order === "desc" ? 'Highest' : 'Lowest'} {FixedAttributeTranslator[`${fixedAttribute}`]}</p>
                {arrayCleanAttributes.length > 0 ?
                    <div>
                        <span className="flex gap-2">Attributes: {arrayCleanAttributes.map(([key, value]) => {
                            return (
                                <p key={key}>{value}, </p>
                            )
                        })}</span>
                    </div>
                    :
                    null
                }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-start">
                {
                    characters.map((c, index) => {
                        const stats: { powerstats: { [key: string]: number } } = {
                            powerstats: { ...c.powerstats }
                        }

                        return (
                            <div key={c.id} className="flex flex-col items-center gap-2">
                                {/* <p>{index + 1}</p> */}
                                <Link href={`/characters/${c.id}?name=${c.name}`}>
                                    <Button variant={"link"}>
                                        <p>{index + 1/* {c.id} */} - {c.name}</p>
                                    </Button>
                                </Link>
                                <Image
                                    src={c.images.md}
                                    className={`rounded-md w-[20rem] h-[20rem] md:w-[20rem] md:h-[25rem] object-cover object-top`}
                                    width={150}
                                    height={150}
                                    alt={c.name}
                                />
                                <p>{FixedAttributeTranslator[`${fixedAttribute}`]}: {stats.powerstats[fixedAttribute.split('.')[1]]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}