'use client'

import Image from "next/image";
import AboutGraphic from '@/assets/about-graphic-transparent.png';
import AboutGraphicLight from '@/assets/about-graphic-transparent-white.png';
import CodeIcon from '@/assets/icons/code';
import WindowIcon from '@/assets/icons/window';

const MAIN_CLASS = 'about';

const About = () => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className={`${MAIN_CLASS} items-center justify-items-center px-8 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]` }>
      <article>
        <section id="intro" className={`${MAIN_CLASS} min-h-screen flex flex-col`}>
          <h1 className="text-4xl font-bold leading-7 pt-[40vh] mb-2 sm:truncate sm:text-4xl sm:tracking-tight">
            Hi.  I&#39;m David.
          </h1>
          <div className="flex flex-row flex-wrap grow">
            <div className="min-w-[300px] w-1/2">
              <p className="mt-2 mb-6">
                I do software engineering!<br/>
                This site is the beginnings of a personal playground: a place where I
                get to explore tools, languages, and frameworks I'm interested in - and build utilities I need.<br/>
              </p>
              <p className="text-sm text-[var(--secondary)]">More about me <span className="inline-block animate-bounce ml-2">&darr;</span></p>
            </div>
            <Image className="ml-auto max-w-[200px] self-end pb-[10vh]" src={isDarkMode ? AboutGraphicLight : AboutGraphic} alt="intro graphic" />
          </div>
        </section>
        <section>
          <h2 className="text-4xl text-center font-bold mb-10 sm:truncate sm:text-4xl sm:tracking-tight">
            5+ years of building scalable web applications
          </h2>
          <div className="flex flex-wrap">
            <div className="min-w-[300px] flex-1 flex flex-col items-center sm:px-10">
              <WindowIcon className="h-10 w-10 fill-[var(--alternative)] mb-4" />
              <h4 className="text-3xl text-center mb-4 text-[var(--alternative)]">
                Frontend Adept
              </h4>
              <p className="mb-4">
                Drop me in any ecosystem and I'll hit the ground running.  POJO,
                jQuery, Ember, or Vue?  No sweat, I've seen it all, and more too.
              </p>
              <h6 className="text-xl text-center mb-2 font-semibold">
                My bread and butter
              </h6>
              <ul className="flex flex-col items-center mb-12">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Sass</li>
              </ul>
            </div>
            <div className="min-w-[300px] flex-1 flex flex-col items-center sm:px-10">
              <CodeIcon className="h-10 w-10 fill-[var(--alternative)] mb-4" />
              <h4 className="text-3xl text-center mb-4 text-[var(--alternative)]">
                Fullstack Curious
              </h4>
              <p className="mb-4">
                Who says devs have to stay in their own part of the stack?
              </p>
              <h6 className="text-xl text-center mb-2 font-medium">
                A few of my sidequests:
              </h6>
              <ul className="flex flex-col items-center mb-12">
                <li className="text-center mb-2">
                  Untagling a mess of unnamed mp3s by writing a Python script
                </li>
                <li className="text-center mb-2">
                  Implementing RESTful endpoints in Golang microservices
                </li>
                <li className="text-center mb-2">
                  Spinning up a new service on a Kubernetes cluster for an internal demo
                </li>
                <li className="text-center mb-2">
                  Writing Verilog to create a USB3.0 bulk transfer module for FPGAs
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3>What's next</h3>
          <p>
            Every developer needs new toys to play with from time to time.
            <br />
            Here are a few of mine:
          </p>
          <div>
            <div>k8s</div>
            <div>ML</div>
            <div>Tailwind</div>
            <div>Next.js</div>
            <div>MongoDB</div>
            <div>GraphQL</div>
          </div>
        </section>
        <section>
          <p>
            Want to get to know me a bit better?
            Enter a certain code created by Hashimoto Kazuhisa ...
          </p>
        </section>
      </article>
    </div>
  );
}

export default About;
