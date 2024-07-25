import Image from 'next/image';
import React from 'react';
import avatar from '@/assets/photo.png';
export function Avatar() {
  return (
    <div className='border-4 border-blue-600 rounded-[50%]'>
      <Image src={avatar} alt='' width={500} height={500} />
    </div>
  );
}
