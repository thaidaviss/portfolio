'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.7, duration: 0.2, ease: 'easeInOut' },
          }}
          className='h-screen w-screen fixed bg-secondary top-0 pointer-events-none z-10'></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
}
