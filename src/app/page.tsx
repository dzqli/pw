'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TimelineEntries } from './timelineItems';
// import ContactCard from '@/components/ContactCard/ContactCard';
import LinkedInIcon from '@/assets/icons/linkedin';
import MailIcon from '@/assets/icons/mail';
import LoadingSplash from '@/components/LoadingSplash';
import AboutGraphic from '@/assets/about-graphic-transparent.png';
import AboutGraphicLight from '@/assets/about-graphic-transparent-white.png';
import CodeIcon from '@/assets/icons/code';
import WindowIcon from '@/assets/icons/window';
import GqlLogo from '@/assets/logos/gql.png';
import K8sLogo from '@/assets/logos/k8s.png';
import MdbLogo from '@/assets/logos/mdb.png';
import NjsLiteLogo from '@/assets/logos/njs-lite.png';
import NjsDarkLogo from '@/assets/logos/njs-dark.png';
import TfLogo from '@/assets/logos/tf.png';
import TwLogo from '@/assets/logos/tw.png';

import './timeline.css';

const MAIN_CLASS = 'about';

const TileObjects = [
  { title: 'GraphQL', logo: GqlLogo, logoDark: GqlLogo, alt: 'GraphQL Logo', link: 'https://graphql.org/' },
  { title: 'Kubernetes', logo: K8sLogo, logoDark: K8sLogo, alt: 'Kubernetes Logo', link: 'https://kubernetes.io/' },
  { title: 'MongoDB', logo: MdbLogo, logoDark: MdbLogo, alt: 'MongoDB Logo', link: 'https://www.mongodb.com/' },
  { title: 'Next.js', logo: NjsDarkLogo, logoDark: NjsLiteLogo,  alt: 'Next.js Logo', link: 'https://nextjs.org/' },
  { title: 'Tensorflow', logo: TfLogo, logoDark: TfLogo, alt: 'Tensorflow Logo', link: 'https://www.tensorflow.org/' },
  { title: 'Tailwind', logo: TwLogo, logoDark: TwLogo, alt: 'Tailwind Logo', link: 'https://tailwindcss.com/' },
];

const ContactObjects = [
  {
    icon: <MailIcon className='w-7'/>,
    link: 'mailto:zq.david.li@gmail.com',
    text: 'zq.david.li@gmail.com'
  },
  {
    icon: <LinkedInIcon className='w-7'/>,
    link: 'https://www.linkedin.com/in/gydavidli/',
    text: 'in/gydavidli'
  },
];

type TileProps = {
  title: string;
}
const Tile = ({ children }: React.PropsWithChildren<TileProps>) => {
  return (
    <div className="rounded-2xl bg-current flex justify-center items-center w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] lg:w-[10vw] lg:h-[10vw] hover:scale-110 transition-transform duration-300">
      {children}
    </div>
  );
}

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsLoaded(true);
  }, []);
  return isLoaded ? (
    <div className={`${MAIN_CLASS} items-center justify-items-center px-8 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]` }>
      <article>
        <section id="intro" className={`${MAIN_CLASS} min-h-[100vh] flex flex-col`}>
          <h1 className="text-4xl font-bold leading-7 pt-[30vh] mb-2 sm:truncate sm:tracking-tight">
            Hi.  I&#39;m David.
          </h1>
          <div className="flex flex-row flex-wrap grow">
            <div className="min-w-[300px] w-1/2">
              <p className="mt-2 mb-6">
                I do software engineering!<br/>
                This site is the beginnings of a personal playground: a place where I
                get to explore tools, languages, and frameworks I&#39;m interested in - and build utilities I need.<br/>
              </p>
              <p className="text-sm text-[var(--secondary)]">More about me <span className="inline-block animate-bounce ml-2">&darr;</span></p>
            </div>
            <Image className="ml-auto max-w-[200px] self-end pb-[10vh]" src={isDarkMode ? AboutGraphicLight : AboutGraphic} alt="intro graphic" />
          </div>
        </section>
        <section>
          <h1 className="text-4xl text-center font-bold sm:truncate sm:text-4xl sm:tracking-tight">
            5+ years of building scalable web applications
          </h1>
          <div className="flex flex-wrap">
            <div className="min-w-[300px] flex-1 flex flex-col items-center my-20 sm:px-20 sm:border-r border-current">
              <WindowIcon className="h-10 w-10 fill-[var(--alternative)] mb-4" />
              <h4 className="text-3xl text-center mb-4 text-[var(--alternative)]">
                Frontend Adept
              </h4>
              <p className="mb-8">
                Drop me in any ecosystem and I&#39;ll hit the ground running.  POJO,
                jQuery, Ember, or Vue?  No sweat, I&#39;ve seen it all, and more too.
              </p>
              <h6 className="text-xl text-center mb-2 font-medium">
                My bread and butter
              </h6>
              <ul className="flex flex-col items-center">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Sass</li>
              </ul>
            </div>
            <div className="min-w-[300px] flex-1 flex flex-col items-center my-20 sm:px-20">
              <CodeIcon className="h-10 w-10 fill-[var(--alternative)] mb-4" />
              <h4 className="text-3xl text-center mb-4 text-[var(--alternative)]">
                Fullstack Curious
              </h4>
              <p className="mb-8">
                Who says devs have to stay in their own part of the stack?
              </p>
              <h6 className="text-xl text-center mb-2 font-medium">
                A few of my sidequests:
              </h6>
              <ul className="flex flex-col items-center">
                <li className="text-center mb-2">
                  Implementing RESTful endpoints in Golang microservices
                </li>
                <li className="text-center mb-2">
                  Spinning up a new service on a Kubernetes cluster for an internal demo
                </li>
                <li className="text-center mb-2">
                  Untagling a mess of unnamed mp3s by writing a Python script
                </li>
                <li className="text-center mb-2">
                  Writing Verilog to create a USB3.0 bulk transfer module for FPGAs
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-4xl text-center font-bold mt-20  sm:truncate sm:text-4xl sm:tracking-tight">
            A brief history
          </h1>
          <div className="flex items-center justify-center flex-col p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
              {TimelineEntries.map(item => (
                <div key={`timeline-item-${item.key}`} className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-16">
                  <div className="font-bold shrink-0 pl-8 border-l-4 border-[var(--foreground)] sm:w-14 sm:pl-0 sm:border-none">{item.label}</div>
                  <div className={`timeline__item relative pl-8 border-l-4 border-[var(--foreground)] pt-0 pb-8 sm:py-8`}>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h4 className="text-3xl font-bold text-center pt-20">
            What&#39;s next
          </h4>
          <p className="text-xl text-center mb-12 mt-4">
            Every developer needs new toys to play with from time to time.
            <br />
            Here are a few of mine:
          </p>
          <div className="flex flex-wrap justify-center pb-20 gap-8 lg:gap-y-10 lg:gap-x-20 lg:px-[15vw] xl:px-[20vw]">
            {TileObjects.map((tile, index) => (
              <a key={`tool-tile-${index}`} href={tile.link} target="_blank" rel="noopener noreferrer">
                <Tile title={tile.title}>
                  <Image className="h-1/2 w-auto" src={isDarkMode ? tile.logoDark : tile.logo} alt={tile.alt} />
                </Tile>
              </a>
            ))}
          </div>
        </section>
        <section className="flex items-center justify-center flex-col p-5 gap-4 sm:p-20">
          <h4 className="text-3xl font-bold pb-5 text-center">
            Drop me a line!
          </h4>
          {ContactObjects.map((contact, index) => (
            <div key={`contact-item-${index}`} className="flex items-center gap-4">
              {contact.icon}
              <a href={contact.link} target='_blank' rel="noopener noreferrer">
                {contact.text}
              </a>
            </div>
          ))}
        </section>
        {/*<section>
          <p>
            Want to get to know me a bit better?
            Enter a certain code created by Hashimoto Kazuhisa ...
          </p>
        </section>*/}
      </article>
    </div>
  ) : (<LoadingSplash />);
}

export default About;
