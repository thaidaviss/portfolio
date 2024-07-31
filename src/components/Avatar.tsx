'use client';
import Image from 'next/image';
import React from 'react';
import avatar from '@/assets/photo.png';
import { motion } from 'framer-motion';
export function Avatar() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: 'easeIn' } }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeInOut' } }}
          className='border-4 border-blue-600 rounded-[50%] w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] '>
          <Image src={avatar} alt='' priority quality={100} className='object-contain' />
        </motion.div>
      </motion.div>
    </div>
  );
}
