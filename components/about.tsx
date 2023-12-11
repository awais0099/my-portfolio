"use client";

import { motion } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react';
import { ActiveSectionContext } from '@/store/store';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const ActiveSectionContextObj = useContext(ActiveSectionContext);
  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - ActiveSectionContextObj?.timeOfLastClick! > 1000 ) {
      ActiveSectionContextObj?.setActiveSection("About");
    }
  }, [inView, ActiveSectionContextObj?.timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className='max-w-[50rem] text-center mb-28 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{
        delay: 0.175
      }}
      id='about'
    >
        <h2 className='text-3xl font-medium mb-4 capitalize'>About Me</h2>
        <p className='leading-7 my-6'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='leading-7'>
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </motion.section>
  )
}
