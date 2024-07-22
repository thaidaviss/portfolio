'use client';

import { Suspense } from 'react';
import { Header } from '../components';
import Loading from './loading';
const DashboardPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className='flex min-h-screen flex-col items-center justify-between pt-9 pb-9 pr-10 pl-10'>
        <Header></Header>
        <a href='/dashboard'> dashboard</a>
      </main>
    </Suspense>
  );
};

export default DashboardPage;
