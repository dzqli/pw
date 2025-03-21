'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '@/assets/sample-logo-transparent.png';
import LinkedInIcon from '@/assets/icons/linkedin';
import MailIcon from '@/assets/icons/mail';
import './contact.css';

const MAIN_CLASS = 'contact';

const CardFront = () => (
  <div className={`${MAIN_CLASS}__card__front`}>
    <Image src={Logo} alt="logo" />
  </div>
);

// TODO: make generic
// TODO: fix contrast on card
const CardBack = () => (
  <div className={`${MAIN_CLASS}__card__back`}>
    <h3 className="text-3xl text-[#f8faf9]">David Li</h3>
    <h6 className="text-[#425369] text-sm">Software Engineering</h6>
    <br/>
    <div className={`${MAIN_CLASS}__card__link`}>
      <MailIcon />
      <a
        className="text-sm text-blue-900"
        href="mailto:zq.david.li@gmail.com"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        zq.david.li@gmail.com
      </a>
    </div>
    <div className={`${MAIN_CLASS}__card__link`}>
      <LinkedInIcon />
      <a
        className="text-sm text-blue-900"
        href="https://www.linkedin.com/in/gydavidli/"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        in/gydavidli
      </a>
    </div>
  </div>
);

// TODO: Think about responsive card behaviour
const Contact = () => {
  const [isCardFlipped, setCardFlipped] = useState(false);

  return (
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
  );
}

export default Contact;
