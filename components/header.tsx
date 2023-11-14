"use client";
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link';
import { links } from '@/lib/data';

export default function Header() {
  return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] rounded-none backdrop-blur-[0.5rem] border border-opacity-40 h-[4.5rem] w-full sm:top-6 sm:h-[3.5rem] sm:rounded-full sm:w-[36rem]'
        initial={{y: -100, x: "-50%", opacity: 0}}
        animate={{y: 0, x: "-50%", opacity: 1}}
        >
        </motion.div>
            <nav className='flex fixed item-center justify-center top-0 sm:top-[2.1rem] h-[initial] left-1/2 -translate-x-1/2'>
                <ul className='list-none m-0 p-0 flex gap-x-1 items-center justify-center text-[0.9rem] font-medium sm:w-[initial] flex-wrap sm:flex-nowrap w-[22rem]'>
                    {links.map((link) => (
                        <motion.li key={link.name}
                        initial={{y: "-100", opacity: 0}}
                        animate={{y: 0, opacity: 1}}   
                        >
                            <Link href={link.hash} className='flex items-center decoration-none px-5 py-2 hover:text-gray-950'>{link.name}</Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
    </header>
  )
}
