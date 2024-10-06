'use client'

import { createContext } from 'react';

type TLoadingContext = {
  isParticlesInit: boolean;
}

const LoadingContext = createContext<TLoadingContext>({ isParticlesInit: false });

export default LoadingContext;
