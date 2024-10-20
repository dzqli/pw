'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '@/assets/sample-logo-transparent.png';
import './contact.css';

const MAIN_CLASS = 'contact';

const CardFront = () => (
  <div className={`${MAIN_CLASS}__card__front`}>
    <Image src={Logo} alt="logo" />
  </div>
);

// TODO: fix contrast on card
const CardBack = () => (
  <div className={`${MAIN_CLASS}__card__back`}>
    <h3 className="text-3xl text-[#f8faf9]">David Li</h3>
    <h6 className="text-[#425369] text-sm">Software Engineering</h6>
    <br/>
    <a
      className="text-sm text-blue-900"
      href="mailto:zq.david.li@gmail.com"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      zq.david.li@gmail.com
    </a>
  </div>
);

// TODO: Think about responsive card behaviour
const Contact = () => {
  const [isCardFlipped, setCardFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div
        className={`${MAIN_CLASS}__card`}
        role="button"
        onClick={() => {
          const selection = document.getSelection();
          if (selection?.type === 'Range') return;
          setCardFlipped(prev => !prev);
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if(e.keyCode === 13){
            setCardFlipped(prev => !prev);
          }
        }}
      >
        <div className={`${MAIN_CLASS}__card__inner ${isCardFlipped ? `${MAIN_CLASS}__card__inner--flipped` : ''}`}>
          <CardBack />
          <CardFront />
        </div>
      </div>
    </div>
  );
}

export default Contact;
