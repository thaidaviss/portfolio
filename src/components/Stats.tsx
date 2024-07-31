'use client';
import React from 'react';
import CountUp from 'react-countup';
const statList = [
  {
    number: 3,
    text: 'Years of experience',
  },
  {
    number: 5,
    text: 'Project completed',
  },
  {
    number: 12,
    text: 'Technologies mastered',
  },
  {
    number: 500,
    text: 'code commits',
  },
];
export function Stats() {
  return (
    <div className='flex justify-between flex-wrap'>
      {statList.map((item, index) => {
        return (
          <div key={index} className='w-[200px] flex justify-center items-center'>
            <CountUp
              end={item.number}
              duration={5}
              className='h1 text-6xl font-extrabold pr-4 text-primary text-blue-600'
            />
            <span className='text-base block'>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
