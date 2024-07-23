'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { AlignRight, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
const menuList = [
  {
    label: 'Home',
    link: '/',
    key: 'home',
  },
  {
    label: 'Services',
    link: '/services',
    key: 'service',
  },
  {
    label: 'Resume',
    link: '/resume',
    key: 'resume',
  },
  {
    label: 'Work',
    link: '/work',
    key: 'work',
  },
  {
    label: 'Contact',
    link: '/contact',
    key: 'contact',
  },
];
export function Header() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const onChangeTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };
  return (
    <div className='header flex justify-between items-center w-full'>
      <Link href={'/'}>
        <h1 className='logo cursor-pointer font-bold text-xl'>
          <span className='text-blue-500'>{'<'}</span>
          <span className='pointer-events-none font-semibold'>Thai Duc</span>
          <span className='text-blue-500'>{'/>'}</span>
        </h1>
      </Link>
      <div className='nav flex justify-between items-center gap-6 md:gap-[100px] '>
        <div className='menu navbar-laptop md:flex hidden'>
          <ul className='flex w-[400px] justify-between'>
            {menuList.map(menuItem => {
              return (
                <Link
                  key={menuItem.key}
                  href={menuItem.link}
                  className={cn(
                    'font-medium hover:text-blue-500 h-7',
                    pathname == menuItem.link ? 'border-b-blue-500 text-blue-500 border-b-2' : '',
                  )}>
                  {menuItem.label}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className='mode'>
          <Button variant='outline' onClick={onChangeTheme}>
            {theme == 'light' ? <Sun /> : <Moon />}
          </Button>
        </div>
        <div className='nav navbar-mobile md:hidden'>
          <AlignRight size={35} fontWeight={800}/>
        </div>
      </div>
    </div>
  );
}
export default Header;
