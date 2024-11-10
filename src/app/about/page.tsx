import Image from "next/image";
import AboutGraphic from '@/assets/about-graphic-transparent.png';

const MAIN_CLASS = 'about';

const About = () => {
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
            <Image className="ml-auto max-w-[200px] self-end pb-[10vh]" src={AboutGraphic} alt="intro graphic" />
          </div>
        </section>
        <section>
          <h3>5+ years of building scalable web applications</h3>
          <div>
            <div>
              <h4>Frontend Mastery</h4>
              <p>
                Drop me in any ecosystem and I'll hit the ground running.  POJO,
                jQuery, Ember, or Vue?  No sweat, I've seen it all, and more too.
              </p>
              <h6>My bread and butter</h6>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h4>Fullstack Shenanigans</h4>
              <p>
                Who says devs have to stay in their own part of the stack?
              </p>
              <h6>A few of my sidequests</h6>
              <ul>
                <li>Untagling a mess of unnamed mp3s by writing a Python script</li>
                <li>Implementing RESTful endpoints in Golang microservices</li>
                <li>Spinning up a new service on a Kubernetes cluster for an internal demo</li>
                <li>Writing Verilog to create a USB3.0 bulk transfer module for FPGAs</li>
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
