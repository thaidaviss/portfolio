'use client';

import Image from "next/image";
import profilePic from '../assets/photo.png';
import {Header} from "../components";
const DashboardPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Header></Header>
      <a href='/dashboard'> dashboard</a>
      {/* <Image src={profilePic} width={500} height={500} alt='Picture of the author'></Image> */}
    </main>
  );
};

export default DashboardPage;