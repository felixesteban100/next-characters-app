'use client'

import { publisherIMG } from '@/app/lib/charactersUtils';
import { GetDimentionsOfTheLogoForCard } from '@/app/lib/charactersUtils';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from "framer-motion"

type CharacterProps = {
    index: number
    currentCharacter: any//Character;
    withPagination: boolean;
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

export default function CharacterComponent({ index, currentCharacter, withPagination }: CharacterProps) {
    return (
        <Link
            className={`cursor-pointer group/item`}
            href={`/characters/${currentCharacter.id}?name=${currentCharacter.name}&pagination=${withPagination}`}
        >
            {/* <div className="max-w-sm rounded relative w-full">
                <div className="relative w-full h-[37vh]">
                    <Image
                        src={currentCharacter.images.md}
                        alt={currentCharacter.name}
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="py-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-1">
                        <h2 className="font-bold text-xl line-clamp-1 w-full">
                            {currentCharacter.name}
                        </h2>
                        <div className="py-1 px-2 rounded-sm">
                            <p className=" text-sm font-bold capitalize">
                                {currentCharacter.biography.publisher}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <Image
                                src={publisherIMG(currentCharacter.biography.publisher)}
                                alt="episodes"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            <motion.div
                //card-new
                className={
                    `card-new
                    object-contain 
                    w-full 
                    h-[20rem] md:h-[20rem] xl:h-[28rem] 
                    transition-all
                    duration-700
                    md:hover:scale-110
                    relative`
                }
                variants={variants}
                initial={'hidden'}
                animate={'visible'}
                transition={{
                    delay: index * 0.25,
                    ease: 'easeInOut',
                    duration: 0.5,
                }}
                viewport={{ amount: 0 }}
            >
                <Image
                    className={`absolute object-top md:object-center object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md md:group-hover/item:blur-sm`}
                    src={currentCharacter.images.md}
                    alt={currentCharacter.name}
                    width={300}
                    height={300}
                />
                <div
                    className={`absolute z-[12] ml-5 mt-7 w-[90%] h-[85%] flex flex-col justify-between items-start gap-[55%]`}
                >
                    <h2
                        className={`character_name font-bold text-white text-xl xl:text-2xl`}
                    >
                        {currentCharacter.name}
                    </h2>
                    <Image
                            // ${GetColorLogosByPublisher(currentCharacter.biography.publisher)}
                        className={`
                            ${GetDimentionsOfTheLogoForCard(currentCharacter.biography.publisher)}
                        `}
                        src={publisherIMG(currentCharacter.biography.publisher)}
                        alt={`Logo ${currentCharacter.biography.publisher}`}
                        width={100}
                        height={150}
                    />
                </div>
            </motion.div>
        </Link>
    );
}