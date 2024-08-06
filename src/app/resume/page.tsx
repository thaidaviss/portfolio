'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { motion } from 'framer-motion';
function Resume () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: 'easeIn' } }}
      className='container mx-auto h-full py-12'>
      <div className='mx-auto'>
        <Tabs defaultValue='education' className='flex flex-col md:flex-row gap-10'>
          <TabsList className='flex flex-col h-full gap-5 bg-transparent'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='about-me'>About Me</TabsTrigger>
            <TabsTrigger value='skill'>Skill</TabsTrigger>
          </TabsList>
          <TabsContent value='experience'>Experience</TabsContent>
          <TabsContent value='education'>Education</TabsContent>
          <TabsContent value='about-me'>About Me</TabsContent>
          <TabsContent value='skill'>Skill</TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
