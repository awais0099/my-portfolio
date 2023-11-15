"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';
import {LiaDownloadSolid} from 'react-icons/lia';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className='max-w-[50rem]'>
      <div className='flex justify-center'>
        <div className='relative'>
            <motion.div
              initial={{opacity:0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.2
              }}
            >
              <Image
                  src="/mine-temp.jpg"
                  width={192}
                  height={192}
                  priority={true}
                  className="h-24 w-24 rounded-full border border-4 border-white"
                  alt='portfolio'
              />
            </motion.div>
            <motion.span className='text-xl absolute bottom-0 right-0'
              initial={{opacity:0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 1.5,
                duration: 0.7
              }}
            >👋</motion.span>
        </div>
      </div>
      <div className='mt-2'>
        <motion.p className='text-center text-2xl sm:text-2xl font-medium leading-[1.8rem]'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className='font-bold'>Hello, I am Awais.</span> I am <span className='font-bold'>full-stack web developer</span> with <span className='font-bold'>2+ years</span> of experience. I enjoy building <span className='italic'>sites and apps.</span> My focus is <span className='underline'>front-end React</span> <span className='underline'>(Next.js).</span>
        </motion.p>
      </div>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mt-8'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" className='group bg-gray-950 text-white px-4 py-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-800 active:scale-105 transition'>
          Contact me here <BsArrowRightShort className="inline opacity-70 group-hover:scale-x-1 transition" />
        </Link>
        <a href="/CV.pdf" className='group bg-white-900 border border-black/10 px-5 py-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition' download={true}>
          Download CV
          <LiaDownloadSolid className='inline ml-1 group-hover:scale-y-1' />
        </a>
        <Link href="#" target='_blank' className='group flex justify-center items-center sm:ml-2 text-center hover:scale-[1.15] transition border border-black/10 bg-white rounded-full w-[48px] h-[48px] active:scale-105 outline-none focus:scale-110'><FaLinkedin className="inline h-[18px] w-[18px] group-hover:text-gray-800"/></Link>
        <Link href="#" target='_blank' className='group flex justify-center items-center bg-white text-center hover:scale-[1.15] transition border border-black/10 rounded-full w-[48px] h-[48px] active:scale-105 outline-none focus:scale-110'><FaGithubSquare className="inline h-[18px] w-[18px] group-hover:text-gray-800" /></Link>
      </motion.div>
    </section>
  )
}
