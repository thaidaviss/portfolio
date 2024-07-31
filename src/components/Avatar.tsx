'use client';
import Image from 'next/image';
import React from 'react';
import avatar from '@/assets/avatar.png';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Theme } from '@/constants';
export function Avatar() {
  const { theme } = useTheme();
  const mixBlend = theme == Theme.light ? 'mix-blend-darken' : ' mix-blend-lighten';
  return (
    <div className='relative'>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.4, ease: 'easeIn' } }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeInOut' } }}
          className={cn(
            'rounded-[50%] w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] overflow-hidden',
            mixBlend,
          )}>
          <Image src={avatar} alt='' priority quality={100} className='object-fill zoom-in-[0.5]' />
        </motion.div>
      </motion.div>
      {/* circle */}
      <motion.svg
        className='w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-[-1px] left-[-1px]'
        fill='transparent'
        viewBox='0 0 506 506'
        xmlns='http://www.w3.org/2000/svg'>
        <motion.circle
          cx='253'
          cy='250'
          r='250'
          stroke='#2563eb'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}></motion.circle>
      </motion.svg>
    </div>
  );
}
