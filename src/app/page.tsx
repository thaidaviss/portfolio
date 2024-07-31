import { Button } from '@/components';
import { Avatar, Socials } from '@/components';
import { Stats } from '@/components';

import { Download } from 'lucide-react';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='font-bold text-4xl mb-6'>
              Hello I'm <span className='text-accent'>Thai Duc</span>
            </h1>
            <p className='max-w-[500px] mb-9 opacity-80'>
              I’m a Software Engineer with 3 years of experience in Software Development. My
              important skills are ReactJS, NodeJS, JavaScript, and TypeScript. I can learn and
              adapt to a new working environment quickly and spend time learning new technologies
              and best practices to become a better engineer.
            </p>
            {/* button and socials */}
            <div className='button flex flex-col items-center gap-5 justify-center xl:justify-start xl:flex-row'>
              <Button variant={'outline'} className='flex justify-center items-center gap-2'>
                <span>Download CV</span>
                <Download size={18} />
              </Button>
              {/* photo */}
              <div className='socials'>
                <Socials />
              </div>
            </div>
          </div>

          <div className='photo mb-5 xl:mb-0'>
            <Avatar />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
