'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import Stairs from './Stairs';

function StairLoading() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className='h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
          <Stairs />
        </div>
        <motion.div
          initial={{ opacity: 1 }}
          className='h-screen w-screen fixed bg-secondary top-0 pointer-events-none'
          animate={{
            opacity: 0,
            transition: { delay: 0.7, duration: 0.2, ease: 'easeInOut' },
          }}></motion.div>
      </div>
    </AnimatePresence>
  );
}

export default StairLoading;
