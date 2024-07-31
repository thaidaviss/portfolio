import { FacebookIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const socials = [
  {
    icon: <GithubIcon />,
    path: '',
  },
  {
    icon: <LinkedinIcon />,
    path: '',
  },
  {
    icon: <FacebookIcon />,
    path: '',
  },
];
export function Socials() {
  return (
    <div className='flex justify-center w-full gap-5 pt-5 pb-5 xl:justify-start'>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className='cursor-pointer text-primary hover:text-blue-500 hover:border-blue-500 w-[40px] h-[40px] rounded-[50%] border-2 flex justify-center items-center'>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
