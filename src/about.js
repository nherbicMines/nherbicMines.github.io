import React from 'react';
import './index.css';
import me from './images/me.jpg';
import resume from './images/resume.pdf'

function About() {
  return (
    <div>
      <div className="about-details">
        <div className="left-section">
          <div className="intro">
            My technical experience is important, yes.<br />
          </div>
          <img src={me} className="image" id="me" alt="Me at the Grand Canyon" />
          <div className="intro">
            <br />But let me tell you a bit about me as a <strong>person</strong>. <br /><br />
          </div>
        </div>
        <div className="intro-text">
          I am roughly 50% outdoorsy Colorado native, and 50% massive nerd. I love to hike, fish, camp, and pretend that I'm good at guitar. When indoors,
          I tend to play videogames or D&D, binge TV shows, and rave about Tolkien to my friends. Of course when I'm feeling productive I'll work on personal projects (like this website!) that I find interesting.<br /><br />I love to create. I don't have a great skill for visual art, so my favorite creations have been games, the virtual synth project presented on this website, a cigar-box guitar, and world building related things. This desire to create somewhat fueled my passion for programming, as coding makes it very easy for me to come up with an idea and then make it on the spot and immediately be able to display it to other people. I find that the potential for creation that's been unlocked with modern computing is absolutely incredible, and I'm so happy to have the knowledge and skills to utilize it.
        </div>
      </div>
      <br /><hr />
      <div className="h1">
        Back to the professional side. Below is my official résumé.
      </div>

      <iframe src={resume} width="80%" height="1000px"></iframe>
    </div>
  );
}

export default About;