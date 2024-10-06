// providers.js
'use client'

import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react';
import ParticleContext from '@/contexts/ParticleContext';
import { loadSlim } from '@tsparticles/slim';

// Next reloads root when 404 comes, causing particles.js to flicker
const Providers = ({ children }: PropsWithChildren) => {
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
    <ParticleContext.Provider value={{ isParticlesInit }}>
      {children}
    </ParticleContext.Provider>
  );
};

export default Providers;
