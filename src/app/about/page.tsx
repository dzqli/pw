const MAIN_CLASS = 'about';

const About = () => {
  return (
    <div className={MAIN_CLASS}>
      <article>
        <section>
          <h3>Intro</h3>
          <p>
            Hi.<br />
            I'm David, and I do software engineering!<br/>
            This site is the beginnings of a personal playground: a place where I
            get to explore tools, languages, and frameworks I'm interested in - and build utilities I need.<br/>
            Feel free to poke around, and see what you can find.
          </p>
        </section>
        <section>
          <h3>Technologies</h3>
          <p>
            With 4+ years of experience building scalable front-end web applications,
            my expertise primarily lies within <b>React/Javascript</b>.<br/>
            But my curiosity has led me to get my hands dirty with many other technologies:
            <ul>
              <li>Built a script to organize a tangled mess of mp3 using Python</li>
              <li>Helped out the back-end team by working on Golang microservices</li>
              <li>Spun up a new service on a Kubernetes cluster to assist with a live demo</li>
            </ul>
            To name a few.<br />
            I'm a strong believer that any software engineering skills are transferable 
            to all other parts of the stack - so all we have to do is grease those
            elbows and get building.
          </p>
        </section>
        <section>
          <h3>What's next</h3>
          <p>
            I've always been a big fan of understanding systems as a whole, knowledge
            with which can inform better decisions made around every individual component.<br/>
            To that end, I've developed an interest in systems engineering and
            cloud infrastructure, and am actively seeking any opportunities to work with ops.<br/>
            Of course, who can forget the headliner of 2024 - generative AI.<br/>
            There may be a few experiments in that area popping up on this site soon...
          </p>
        </section>
        <section>
          <h3>Other (?)</h3>
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
