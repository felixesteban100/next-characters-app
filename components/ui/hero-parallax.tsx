"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Atom } from "lucide-react";

export const HeroParallax = ({
    characters,
}: {
    characters: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = characters.slice(0, 15);
    const secondRow = characters.slice(15, 35);
    const thirdRow = characters.slice(35, 50);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );

    // const rotateX = useSpring(
    //     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    //     springConfig
    // );
    // const opacity = useSpring(
    //     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    //     springConfig
    // );
    // const rotateZ = useSpring(
    //     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    //     springConfig
    // );
    // const translateY = useSpring(
    //     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    //     springConfig
    // );

    return (
        <div
            //[perspective:1000px] [transform-style:preserve-3d]
            // pb-40 pt-[70rem]
            className=" overflow-hidden  antialiased relative flex flex-col self-auto group/hero "
        >

            <motion.div
                style={{
                    // rotateX,
                    // rotateZ,
                    // translateY,
                    // opacity,
                    opacity: 0.2,
                    translateY: 0
                }}
                className=""
            >
                <div
                    className="flex space-x-20 group mb-20"
                >
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20  animate-loop-scroll "
                    >
                        {firstRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20  animate-loop-scroll "
                    >
                        {firstRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}

                    </motion.div>
                </div>
                <div
                    className="flex space-x-20 group mb-20"
                >
                    <motion.div
                        className="group-hover:paused flex  space-x-20 animate-loop-scroll2 "
                    >
                        {secondRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateXReverse}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="group-hover:paused flex space-x-20 animate-loop-scroll2 "
                    >
                        {secondRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateXReverse}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </div>
                <div
                    className="flex space-x-20 group"
                >
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20 animate-loop-scroll "
                    >
                        {thirdRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20 animate-loop-scroll "
                    >
                        {thirdRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <Header />
        </div>
    );
};


export const Header = () => {
    return (
        <div
            //py-20 md:py-40 
            className="group-hover/hero:opacity-10 transition-opacity duration-700 pointer-events-none absolute flex justify-start items-center h-[80vh] w-[100vh]">
            {/* <Link href={'/characters'} > */}

            <div
                //text-edge-outline
                className="text-stroke-custom-main text-secondary duration-1000  animate-title font-display text-4xl xl:text-9xl font-bold flex justify-center items-center gap-2 pl-5"
            >
                CH<Atom
                    // width={`15%`}
                    // height={`100%`}
                    // text-xl sm:text-6xl md:text-9xl
                    // animate-spin1
                    className={`animate-logo-color h-[3rem] w-[3rem] xl:h-[8rem] xl:w-[8rem] `}
                />R4CT3R5
            </div>
            {/* <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                    We build beautiful products with the latest technologies and frameworks.
                    We are a team of passionate developers and designers that love to build
                    amazing products.
                </p> */}
            {/* </Link> */}
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {

    return (
        <motion.div
            /* style={{
                x: translate,
            }} */
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className={"group/product h-56 w-[20rem] relative flex-shrink-0"}
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};