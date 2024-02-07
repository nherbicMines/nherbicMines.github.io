import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './about.js';
import GiantFoundry from './giantFoundry.js';
import BISByLevel from './BISByLevel.js';

import evalApp from './images/evalApp.png';
import synthPic from './images/synthPic.png';
import tdeGame from './images/tdeGame.png';
import report from './images/report.pdf';
import tdeTrailer from './images/Tower-Defense-Engineered.mp4';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-container">
          <div className="nav-name">
            Nick Herbic
          </div>
          <div className="nav-items">
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="dropdown">
              <Link to="/in-site-apps">In-site Apps</Link>
              <div className="dropdown-content">
                <Link to="/giant-foundry">Optimal Giants' Foundry</Link>
                <Link to="/bis-by-level">Best In Slot by Level</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/in-site-apps" element={<InSiteApps />} />
          <Route path="/giant-foundry" element={<GiantFoundry />} />
          <Route path="/bis-by-level" element={<BISByLevel />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="intro-container">
        <div className="intro">
          Hello, World.<br /><br />My name is Nick. Thanks for visiting. <br /> <br />
        </div>
        <div className="intro-small">
          I am currently a graduate with a Bachelor's in Computer Science from the <span style={{ color: '#1930a6', fontWeight: 'bold' }}>Colorado School of Mines</span>. And I'm currently looking for a job.
          This website serves as an addition to to my resume, although my official resume is listed in the "About" section.
        </div>
        <br /><hr /><br />
      </div>

        <div className="h1">
          Here are some projects I've worked on:
        </div>
      <div className="container">
        <a href="https://github.com/nherbicMines/Tower-Defense-Engineered" target='_blank'><img src={tdeGame} className="image" alt="Tower Defense: Engineered" /></a>
        <a href="https://github.com/nherbicMines/Tower-Defense-Engineered" target='_blank'>Tower Defense: Engineered</a>
        <br /><br />
        A tower defense game where the player has an active role through each wave.
      </div>
      <div className="description">
        <strong>Team Size</strong>: 4
        <br /><br />
        <strong>Timeframe</strong>: February 2022-April 2022
        <br /><br />
        <strong>Technologies Used</strong>: GameMaker: Studio 2, GML, Github
        <br /><br />
        <strong>Description</strong>: Tower Defense: Engineered was a final project for my team's Game Development course.
        It was created in GameMaker: Studio 2 and helped us develop skills for the game creation process as well as
        general team project skills. Much of the work was in our Game Development Document and Github project backlog.
        The concept was a tower-defense style game in which the player has an active role fighting and repairing/upgrading towers
        during enemy waves. The game in its current state only has two levels, with plans to expand at a later date. A mock-trailer for
        the game can be found <a href={tdeTrailer} target='_blank'>here.</a>
      </div>
      <br /><br /><hr /><br />
      <div className="container">
        <a href="https://github.com/nherbicMines/RMS-AAPG-App" target='_blank'><img src={evalApp} className="image" id="eval" alt="Presentation Evaluation App" /></a>
        <a href="https://github.com/nherbicMines/RMS-AAPG-App" target='_blank'>Presentation Evaluation App</a>
        <br /><br />
        An evaluation webapp made for RMS-AAPG (Rocky Mountain Section of the American Association of Petroleum Geology).
      </div>
      <div className="description">
        <strong>Team Size</strong>: 5
        <br /><br />
        <strong>Timeframe</strong>: May 2022-June 2022
        <br /><br />
        <strong>Technologies Used</strong>: React, Microsoft Azure Cloud Service, SQL Database, NodeJS, GitHub, Postman
        <br /><br />
        <strong>Description</strong>: My team was asked by RMS-AAPG to make a web application which could be used 
        by attendees to evaluate presentations at their annual conference. Through use of an Azure Cloud
        database, it is reusable for every conference they hold. When a properly formatted spreadsheet
        is uploaded, the sections and presentations are repopulated with that year's content. Proper security
        measures were put in place to ensure accurate scores free of abuse. This was my first experience  creating
        a software solution that is actually used by a company. As such, in addition to the software itself, my team
        and I produced a Project Report which can be found <a href={report} target='_blank'>here</a>
      </div>
      <br /><br /><br /><br /><hr /><br />
      <div className="container">
        <a href="https://github.com/nherbicMines/synthTest2" target='_blank'><img src={synthPic} className="image" id="eval" alt="Presentation Evaluation App" /></a>
        <a href="https://github.com/nherbicMines/synthTest2" target='_blank'>Virtual Synthesizer</a>
        <br /><br />
        A virtual synthesizer with a simplistic user-friendly GUI.
      </div>
      <div className="description">
        <strong>Team Size</strong>: Solo
        <br /><br />
        <strong>Timeframe</strong>: November 2020
        <br /><br />
        <strong>Technologies Used</strong>: C++, MS Visual Studio, SFML
        <br /><br />
        <strong>Description</strong>: A simple musical synthesizer to challenge myself in combining the science of sound with coding, as well as creating a robust GUI from scratch. It uses a formula to produce a sin wave from the given frequency of the note being pressed. In addition, it has an "alternate mode" which produces a square wave for an 8-bit like sound.
      </div>
    </div>
  );
}

// Define the dropdown menu for "In-site Apps"
function InSiteApps() {
  return (
    <div>
      {/* Content for the "In-site Apps" page */}
      <h2>In-site Apps</h2>
      {/* You can add additional content here if needed */}
    </div>
  );
}

export default App;