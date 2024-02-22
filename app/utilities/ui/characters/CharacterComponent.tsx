'use client'
// this is not so necessary because the parent component is client also (but later I realized it is in on place in other the parent component is server)

import { GetColorLogosByPublisher, publisherIMG } from '@/app/utilities/lib/charactersUtils';
import { GetDimentionsOfTheLogoForCard } from '@/app/utilities/lib/charactersUtils';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from "framer-motion"
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { Character, RandomImage } from '../../lib/definitions';

type CharacterProps = {
    index: number
    currentCharacter: Character;
    withPagination: boolean;
    randomImage: RandomImage
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await getRandomImage()
//     const posts = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

export default function CharacterComponent({ index, currentCharacter, withPagination, randomImage }: CharacterProps) {
    //// using the localStorage of favorites it is refreshing the array... why???
    // const containsCharacter = (character: CharacterInfo) => [...charactersFavorite].some( ({id}) => character.id == id)   

    // const characterNameLenght = (currentCharacter.name.length)


    // look for a way to make this link change the page and load the info while being at the page
    // because now is loading and then changing the page and it is annoying :/
    return (
        <Link
            className={`cursor-pointer group/item`}
            href={`/characters/${currentCharacter.id}?name=${currentCharacter.name}&image=${randomImage.selectedRandomImage.key}&pagination=${withPagination}`}
        // href={link+`&pagination=${withPagination}`}
        >
            <motion.div
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
                <CardContainer className="inter-var">
                    {/* w-auto sm:w-[30rem] h-auto p-6 */}
                    {/* bg-gray-50  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl  border   */}
                    <CardBody
                        // max-w-[17rem]
                        className={` relative group/card  rounded-md h-[23rem] xl:h-[25rem] `}
                    >
                        <CardItem
                            translateZ="150"
                            //group-hover/item:box-hover
                            className="w-full rounded-md mt-5 box characterComponent overflow-hidden sm:max-w-[17rem]"
                        >
                            <Image
                                //md:group-hover/item:blur-sm
                                // h-[20rem] md:h-[20rem] xl:h-[22rem]  
                                // md:group-hover/item:blur-sm
                                className={`object-top md:object-center object-cover  w-full h-[23rem] xl:h-[25rem] transition-opacity duration-200 ease-in-out rounded-md group-hover/item:opacity-50`}
                                src={randomImage.selectedRandomImage.value}
                                alt={currentCharacter.name}
                                width={200}
                                height={150}
                                placeholder="blur"
                                blurDataURL={randomImage.blurSelectedRandomImage}
                            />
                        </CardItem>
                        <div
                            // mt-[-85%] md:mt-[-160%] xl:mt-[-135%]
                            // ${characterNameLenght > 30 ? "gap-[10rem] mt-[-25rem] xl:mt-[-25rem]" : characterNameLenght > 14 ? "gap-[12rem] mt-[-22rem] xl:mt-[-24rem]" : "gap-[14rem] mt-[-21rem] xl:mt-[-23rem]"}
                            className={`h-[21rem] xl:h-[24rem] mx-8 p-2 flex flex-col justify-between items-baseline  mt-[-22rem] xl:mt-[-24rem]`}
                        >
                            <CardItem
                                translateZ="300"
                                //drop-shadow-[5px_5px_5px_white]
                                // mt-[-21rem] xl:mt-[-23rem] mb-[11rem] xl:mb-[14rem]
                                // mt-[-85%] md:mt-[-160%] xl:mt-[-135%] mb-[50%] md:mb-[85%] xl:mb-[70%] 

                                //text-center text-2xl md:text-xl xl:text-3xl ${characterNameLenght < 14 ? "lg:whitespace-nowrap " : "text-wrap"} 
                                className={`text-ellipsis text-3xl font-extrabold text-stroke-custom overflow-hidden max-w-full lg:max-w-[8rem] xl:max-w-[10rem] 2xl:max-w-full `}
                            >
                                {currentCharacter.name}
                            </CardItem>
                            <CardItem
                                translateZ={300}
                                as="button"
                                className="rounded-xl text-xs font-normal"
                            >
                                <Image
                                    className={`${GetDimentionsOfTheLogoForCard(currentCharacter.biography.publisher)} ${GetColorLogosByPublisher(currentCharacter.biography.publisher)}`}
                                    src={publisherIMG(currentCharacter.biography.publisher)}
                                    alt={`Logo ${currentCharacter.biography.publisher}`}
                                    width={100}
                                    height={150}
                                />
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </motion.div>
            {/* <motion.div
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
                <image
                    className={`absolute object-top md:object-center object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md md:group-hover/item:blur-sm`}
                    src={randomImage.value}
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
                    </div>
                    <image
                        className={`
                            ${GetDimentionsOfTheLogoForCard(currentCharacter.biography.publisher)}
                        `}
                        src={publisherIMG(currentCharacter.biography.publisher)}
                        alt={`Logo ${currentCharacter.biography.publisher}`}
                        width={100}
                        height={150}
                    />
                </div>
            </motion.div> */}
        </Link>
    );
}