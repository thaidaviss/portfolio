'use client';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

function LoadingTransition() {
  const pathname = usePathname();
  return <AnimatePresence mode='wait'>LoadingTransition</AnimatePresence>;
}

export default LoadingTransition;
