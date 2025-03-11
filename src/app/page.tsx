'use client'
import { getTimeBand } from '@/helpers';
import ngsSL from '@/assets/nagasaki';
import yyzSL from '@/assets/toronto';

const getImageSource = (timeBand: string) => {
  switch (timeBand) {
    case 'evening':
      return { Skyline: yyzSL, height: 'h-1/2' };
    case 'morning':
      return { Skyline: ngsSL, height: 'h-1/4' };
    case 'afternoon':
      return { Skyline: ngsSL, height: 'h-1/4' };
    default:
      return { Skyline: yyzSL, height: 'h-1/2' };
  }
}

export default function Home() {
  const timeBand = getTimeBand(new Date());
  const { Skyline, height } = getImageSource(timeBand);
  return (
    <div className="items-center justify-items-center min-h-[90vh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold leading-7 mt-[20vh] sm:truncate sm:text-5xl sm:tracking-tight">
          Good {timeBand}
        </h1>
      </main>
        <Skyline className={`splash-art fixed left-1/2 -translate-x-1/2 bottom-0 w-auto ${height}`} />
    </div>
  );
}
