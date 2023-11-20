"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
import Image from 'next/image';

type ProjectPropsType = {
    title: string,
    description: string,
    tags: string[],
    imageUrl: StaticImageData
};

export default function Project({title, description, tags, imageUrl}:ProjectPropsType) {
    const projectRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.section
            ref={projectRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='group max-w-[42rem] relative overflow-hidden sm:h-[20rem] bg-black/5 bg-gray-200 rounded-md mb-3 last:mb-0'
        >
                <div className='group-odd:ml-[20rem] even:pl-8 px-5 py-4 sm:pb-8 sm:pt-10 sm:pl-10 sm:pr-2 sm:max-w-[50%] flex flex-col h-full'>
                    <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
                    <p className='leading-[1.5rem] opacity-70'>{description}</p>
                    <ul className='flex flex-wrap gap-2 max-w-[20rem] sm:mt-auto'>
                        {tags.map(function(tag, index) {
                            return (
                                <li key={index} className='bg-gray-950 text-white px-3 py-1 rounded-full'>{tag}</li>
                            );
                        })}
                    </ul>
                </div>
                <Image src={imageUrl} alt="project image" quality={95}
                className='
                    rounded-md
                    absolute 
                    top-9 
                    -right-40 
                    w-[28.25rem] 
                    shadow-2xl 
                    group-odd:right-[initial] 
                    group-odd:-left-40 transition
                    group-odd:translate-x-3
                    group-odd:translate-y-3
                    group-odd:group-hover:rotate-2

                    group-hover:-rotate-2 
                    group-hover:-translate-x-3 
                    group-hover:-translate-y-3'
                />
            </motion.section>
    )
}