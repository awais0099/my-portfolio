"use client";

import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <motion.section className='max-w-[50rem] mb-28'>
        <h2 className='text-3xl text-center font-medium mb-4 capitalize'>Projects</h2>

        {projectsData.map(function(project, index) {
            return (
                <Project key={index} {...project} />
            )
        })}
    </motion.section>
  )
}

type ProjectPropsType = {
    title: string,
    description: string,
    tags: string[],
    imageUrl: StaticImageData
};

function Project({title, description, tags, imageUrl}:ProjectPropsType) {
    return (
        <section className='group max-w-[42rem] relative overflow-hidden sm:h-[20rem] bg-black/5 bg-gray-200 rounded-md mb-3 last:mb-0'>
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
            className='rounded-md absolute top-9 -right-40 w-[28.25rem] shadow-2xl group-odd:right-[initial] group-odd:-left-40' 
            />
        </section>
    )
}