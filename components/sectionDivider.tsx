"use client";

import { motion } from 'framer-motion'
import React from 'react';

export default function SectionDivider() {
  return (
    <motion.div className='w-1 h-16 bg-gray-300 my-24 rounded-full'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.125
        }}
    >

    </motion.div>
  )
}
