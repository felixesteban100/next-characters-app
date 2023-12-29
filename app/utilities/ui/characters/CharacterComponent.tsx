'use client'

import { publisherIMG } from '@/app/utilities/lib/charactersUtils';
import { GetDimentionsOfTheLogoForCard } from '@/app/utilities/lib/charactersUtils';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from "framer-motion"
import useCharacterStorage from '../../hooks/useCharacterStorage';
import { CharacterInfo } from '../../lib/definitions';

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
    // const [charactersFavorite] = useCharacterStorage('next-characters-app')
    //// it is refreshing the array... why???
    // const containsCharacter = (character: CharacterInfo) => [...charactersFavorite].some( ({id}) => character.id == id)

    return (
        <Link
            className={`cursor-pointer group/item`}
            href={`/characters/${currentCharacter.id}?name=${currentCharacter.name}&pagination=${withPagination}`}
        >
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
                    <div className='w-full flex justify-between pr-5'>
                        <h2
                            className={`character_name font-bold text-white text-xl xl:text-2xl`}
                        >
                            {currentCharacter.name}
                        </h2>
                        {/* <p className={`text-xl xl:text-2xl ${containsCharacter(currentCharacter) === true ? "block" : "hidden"}`}>⭐</p> */}
                    </div>
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