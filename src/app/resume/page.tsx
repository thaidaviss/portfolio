'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: '',
  items: [
    {
      company: '24HDEV',
      position: ' Full-stack Developer',
      project: 'Training Internship (6 members) ',
      duration: '06/2021 - 09/2021',
      description: 'Training project for intern.',
      technologies: [
        'Frontend: HTML, CSS, JavaScript, ReactJs',
        'Backend: Golang.',
        'Database: MySQL.',
        'Others: Linux and Docker.',
      ],
      responsibilities: [
        'Work with team members and superiors to understand the problem and learn',
        'many valuable lessons.',
        'Practice interface development skills and write API for the backend.',
        'Daily review to improve and fix bugs',
      ],
    },
    {
      company: '24HDEV',
      position: 'Front-End  Developer',
      project: 'Coinstrat (2 members)',
      duration: '09/2021 - 04/2022',
      description: 'Landing page of NFT trading system.',
      technologies: ['Frontend: NextJs, redux toolkit, Apollo client.', 'Backend: Strapi CMS.'],
      responsibilities: [
        'Implement new features of the project based on documentation.',
        'Handle data with RestAPI.',
        'Fix bugs and refactor code.',
      ],
    },
    {
      company: 'Ban Vien Company',
      position: 'Front-end Developer',
      project: 'Christ In Us™ (16 members)',
      duration: '07/2022 - 02/2023',
      description:
        'The Christ In Us™ is a religious education program. To teach the Catholic faith and values to students. It is used in schools and parishes, offering a comprehensive approach to catechesis that emphasizes personal encounters with Christ and the practical application of faith in daily life. The program provides digital resources, encourages family involvement, integrates Scripture and Tradition, and offers opportunities for prayer and worship. This helps students grow in their faith and develop a deeper relationship with Christ',
      technologies: [
        'ReactJs, Typescript.',
        'RTK Query, Antd,formik, Full-Calendar, I18n, Styled components, ...',
      ],
      responsibilities: [
        'Analyze the requirements and estimate the time to complete the task.',
        'Discuss, and contribute ideas and solutions for the features assigned.',
        'Implement new features of the project based on documentation and design.',
        'Cross-review among members with each other.',
      ],
    },
    {
      company: 'Ban Vien Company ',
      position: 'Software Engineer',
      project: 'Perfection Next',
      duration: '02/2023 – Current',
      description:
        'PerfectionNext is an advanced educational. that provides digital resources for effective teaching and learning, it offers interactive textbooks, assessments, and supplemental materials across various subjects. The platform features personalized learning paths, progress tracking, and data analytics to help educators tailor instruction to individual student needs. Designed for both classroom and remote learning, PerfectionNext enhances the educational experience through innovative technology and comprehensive content.',
      technologies: [
        'ReactJS, Typescript',
        'Antdesign, Redux, React Router, ReCharts, Styled components',
      ],
      responsibilities: [
        'Research and classify requirements.',
        'Break tasks, discuss them, and assign them to the team.',
        'Implement new features of the project based on documentation.',
        'Review and refactor code, discuss and support team members.',
      ],
    },
  ],
};
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
          <TabsContent value='experience' className='w-full'>
            <ScrollArea className='h-[80vh] w-full'>
              {experience.items.reverse().map((item, index) => {
                return (
                  <div key={index} className='mt-10'>
                    <div className='text-lg font-bold mb-2 text-blue-500'>
                      {item.company}|{item.position}
                    </div>
                    <div>{item.project}</div>
                    <div className='text-sm italic mb-2'>{item.duration}</div>
                    <div>{item.description}</div>
                    <div>Technologies:</div>
                    <ul className='text-md list-disc '>
                      {item.technologies.map(tech => (
                        <li className='ml-5 list'>{tech}</li>
                      ))}
                    </ul>
                    <div>Responsibilities:</div>
                    <ul className='list-disc'>
                      {item.responsibilities.map(re => (
                        <li className='ml-5 list'>{re}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </ScrollArea>
          </TabsContent>
          <TabsContent value='education' className='w-full'>
            Education
          </TabsContent>
          <TabsContent value='about-me' className='w-full'>
            About Me
          </TabsContent>
          <TabsContent value='skill' className='w-full'>
            Skill
          </TabsContent>
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
