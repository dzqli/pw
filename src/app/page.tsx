'use client'
import { getTimeBand } from '@/helpers';
import Image from 'next/image';
import dlcSL from '@/assets/dalian.svg';
import ngsSL from '@/assets/nagasaki.svg';
import yyzSL from '@/assets/toronto.svg';

const getImageSource = (timeBand: string) => {
  switch (timeBand) {
    case 'evening':
      return yyzSL;
    case 'morning':
      return dlcSL;
    case 'afternoon':
      return ngsSL;
    default:
      return ngsSL;
  }
}

export default function Home() {
  const timeBand = getTimeBand(new Date());
  const skyline = getImageSource(timeBand);
  return (
    <div className="items-center justify-items-center min-h-[90vh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold leading-7 mt-[20vh] sm:truncate sm:text-5xl sm:tracking-tight">
          Good {timeBand}
        </h1>
      </main>
      <Image
        className="fixed left-0 bottom-0 h-2/5 object-cover"
        src={skyline}
        alt="skyline"
      />
    </div>
  );
}
