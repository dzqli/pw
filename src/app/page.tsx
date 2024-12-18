'use client'
import { getTimeBand } from '@/helpers';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-[90vh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold leading-7 mt-[20vh] sm:truncate sm:text-5xl sm:tracking-tight">
          Good {getTimeBand(new Date())}
        </h1>
      </main>
    </div>
  );
}
