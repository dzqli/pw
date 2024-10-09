'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '@/assets/sample-logo-transparent.png';
import './contact.css';

const MAIN_CLASS = 'contact';

const CardFront = () => (
  <div className={`${MAIN_CLASS}__card__front w-full h-full flex items-center justify-center`}>
    <Image src={Logo} alt="logo" />
  </div>
);

const CardBack = () => (
  <div className={`${MAIN_CLASS}__card__back`}>
    Hi
  </div>
);

// TODO: Think about responsive card behaviour
const Contact = () => {
  const [isCardFlipped, setCardFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div
        className={`${MAIN_CLASS}__card ${isCardFlipped ? '--flipped' : ''}`}
        role="button"
        onClick={() => setCardFlipped(prev => !prev)}
        tabIndex={0}
        onKeyDown={(e) => {
          if(e.keyCode === 13){
            setCardFlipped(prev => !prev);
          }
        }}
      >
        {isCardFlipped ? <CardBack /> : <CardFront />}
      </div>
    </div>
  );
}

export default Contact;
