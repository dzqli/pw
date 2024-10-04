'use client'

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import ParticleOptions from '@/app/assets/particles.snow.json';
import { getTimeBand } from '@/helpers';

export default function Home() {
  // TODO: move this up to context if > 1 instances of particles
  const [isParticlesInit, setParticlesInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);
  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-2xl font-bold leading-7 mt-[20vh] sm:truncate sm:text-3xl sm:tracking-tight">
          Good {getTimeBand(new Date())}
        </h1>
        {isParticlesInit && (
          <Particles
            id="tsparticles"
            // @ts-expect-error: JSON import string literal
            options={ParticleOptions}
          />
        )}
      </main>
    </div>
  );
}
