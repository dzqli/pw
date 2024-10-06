// 404 - Abstract out for generic error handling
'use client'

import { useContext } from 'react';
import ParticleContext from '@/contexts/ParticleContext';
import Particles from '@tsparticles/react';
import ParticleOptions from '@/assets/particles.snow.json';

const Custom404 = () => {
  const { isParticlesInit } = useContext(ParticleContext);

  return (
    <>
      {isParticlesInit && (
        <Particles
          id="tsparticles"
          // @ts-expect-error: JSON import string literal
          options={ParticleOptions}
        />
      )}
      <div className="bg-black/[.1] dark:bg-transparent flex flex-col items-center justify-center min-h-screen min-w-screen">
        <h1 className="text-3xl"> Oops! This page does not exist (...yet)!</h1>
      </div>
    </>
  );  
}

export default Custom404;
