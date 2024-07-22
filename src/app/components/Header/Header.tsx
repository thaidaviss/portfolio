import React from 'react';

const menuList = [
  {
    label: 'Home',
    link: '#home',
    key: 'home',
  },
  {
    label: 'Service',
    link: '#service',
    key: 'service',
  },
  {
    label: 'Resume',
    link: '#resume',
    key: 'resume',
  },
  {
    label: 'Work',
    link: '#work',
    key: 'work',
  },
  {
    label: 'Contact',
    link: '#contact',
    key: 'contact',
  },
];
export function Header() {
  return (
    <div className='header flex justify-between w-full'>
      <div className='logo cursor-pointer'>
        <span className='pointer-events-none font-semibold text-blue-500'>{`<Thai Duc/>`}</span>
      </div>
      <div className='nav flex justify-between gap-[100px]'>
        <div className='menu'>
          <ul className='flex w-[400px] justify-between'>
            {menuList.map(menuItem => {
              return (
                <li
                  key={menuItem.key}
                  className='font-medium hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500'>
                  <a href={menuItem.link}>{menuItem.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='mode'>Dark</div>
      </div>
    </div>
  );
}
