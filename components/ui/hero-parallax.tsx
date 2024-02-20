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
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
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
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            className="h-[275vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <div
                    className="flex space-x-20 group"
                >
                    <motion.div
                        className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 animate-loop-scroll group-hover:paused"
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
                        className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 animate-loop-scroll group-hover:paused"
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
                    className="flex space-x-20 group"
                >
                    <motion.div
                        className="flex mb-20 space-x-20 animate-loop-scroll2 group-hover:paused"
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
                        className="flex  mb-20 space-x-20 animate-loop-scroll2 group-hover:paused"
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
                        className="flex flex-row-reverse space-x-reverse space-x-20 animate-loop-scroll group-hover:paused"
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
                        className="flex flex-row-reverse space-x-reverse space-x-20 animate-loop-scroll group-hover:paused"
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
        </div>
    );
};


export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <Link href={'/characters'} >
                <div className="z-10 text-4xl text-transparent duration-1000 bg-primary cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-bold flex justify-center items-center gap-2 hover:underline">
                    ch<Atom
                        width={100}
                        height={100}
                        className={`object-contain text-primary animate-spin1`}
                    />r4c732
                </div>
                {/* <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                    We build beautiful products with the latest technologies and frameworks.
                    We are a team of passionate developers and designers that love to build
                    amazing products.
                </p> */}
            </Link>
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
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className={"group/product h-96 w-[30rem] relative flex-shrink-0"}
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