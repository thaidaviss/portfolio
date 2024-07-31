'use client';
import { cn } from '@/lib/utils';
import { TMenu } from '@/types';
import { motion, useAnimate } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface IProps {
  isMobileOpen: boolean;
  menuList: TMenu[];
  openMenuMobile: () => void;
}

function MobileNav({ isMobileOpen, menuList, openMenuMobile }: IProps) {
  const [scope, animate] = useAnimate();
  const pathname = usePathname();
  const animation = async (isOpen: boolean) => {
    await animate(
      scope.current,
      { x: isOpen ? '0' : '100%' },
      { duration: 0.4, ease: 'easeInOut', delay: 0 },
    );
  };
  useEffect(() => {
    animation(isMobileOpen);
  }, [isMobileOpen]);

  return (
    <div className={cn('w-screen h-screen top-0 left-0 fixed overflow-hidden pointer-events-none')}>
      <motion.div
        ref={scope}
        className='menu-mobile absolute  top-0 bottom-0 w-screen left-0 bg-primary flex justify-center pointer-events-auto'>
        <ul className='m-20 flex flex-col w-[400px] items-center'>
          {menuList.map(menuItem => {
            return (
              <Link
                key={menuItem.key}
                href={menuItem.link}
                className={cn(
                  'text-secondary',
                  'font-medium hover:text-blue-500 h-7',
                  pathname == menuItem.link ? 'border-b-blue-500 text-blue-500 border-b-2' : '',
                )}>
                {menuItem.label}
              </Link>
            );
          })}
        </ul>
        <div
          className='absolute top-10 right-5 text-secondary cursor-pointer'
          onClick={openMenuMobile}>
          <X />
        </div>
      </motion.div>
    </div>
  );
}

export default MobileNav;
