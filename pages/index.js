import React, { useState } from "react";
import Head from "next/head";

import Navigation from "../components/navigation";
import Contact from "../components/contact";
import Section from "../components/section";

import * as skills from "../utilities/skills";

const Enlight = (props) => <span className="text-xl font-medium text-blue-600 hover:text-blue-700 cursor-pointer">{props.children}</span>;

const Mono = (props) => <span className="font-mono">{props.children}</span>;

const Mark = (props) => (
  <mark className={`bg-${props.color || "yellow"}-${props.intensity || "200"} text-xl font-medium`}>
    &nbsp; {props.children} &nbsp;
  </mark>
);

const Home = (props) => {
  const birthday = new Date("2002-05-02");

  const age = (birthday) => {
    birthday = new Date(birthday);
    return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
  }

  return (
    <div className="container max-w-screen-lg mx-auto">
      <Navigation />

      <div className="xs:px-4 sm:px-8 xs:py-2 sm:py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="xs:col-span-3 sm:col-span-2 h-40 py-16">
            <h1 className="xs:text-4xl sm:text-5xl font-semibold">Davide Casale <span className="wave">👋🏻</span></h1>
            <span className="text-xl text-gray-600">{age(birthday)} Years Old Full-Stack Developer & Programmer based in Italy.</span>
          </div>

          <div className="xs:col-span-0 sm:col-span-1 xs:hidden sm:block h-40"> 
            <img className="float-right w-56 pointer-events-none" src="profile.png" alt="Profile"/>
          </div>
        </div>

        <div id="about" className="mt-16 py-2">
          <h1 className="text-3xl font-semibold mb-3">About Me 🧑🏻</h1>

          <div className="text-lg">
            <p className="mb-3">
              I started my career in the world of <Mono>Information Technology </Mono> at 
              the age of 13, when I started studying C++ completely <Mono>Self-Taught</Mono>.
            </p>

            <p className="mb-3">
              In a short time I discover a real passion for <Mono>Coding and Programming </Mono> and, year after year,
              I dedicate myself more and more to the study of it, basically focusing on three fields: <Mono>Web-Developing</Mono>, <Mono>Low-Level</Mono> programming
              and development of <Mono>VR</Mono>, <Mono>AR</Mono> and <Mono>MR</Mono> applications. 
            </p>
            
            <p>
              Since the beginning I have written and created more and more projects,
              which I often publish on my <Mono>Github</Mono> account or which I tell about on my <Mono>Linkedin</Mono> profile.
            </p>
          </div>

          <div className="flex grid xs:grid-cols-2 sm:grid-cols-6 mt-10 mb-12">
            <div className="xs:hidden sm:block col-span-1"/>

            <a href="https://www.github.com/Davi0k" target="_blank" className="xs:col-span-1 sm:col-span-2">
              <div className="w-40 uppercase text-3xl border-b-8 border-gray-500 text-gray-800 m-auto text-center hover:border-gray-600 hover:text-black">
                <Mono>GITHUB</Mono>
              </div>
            </a>  

            <a href="https://www.linkedin.com/in/davide-casale-2002/" target="_blank" className="xs:col-span-1 sm:col-span-2">
              <div className="w-40 uppercase text-3xl border-b-8 border-gray-500 text-gray-800 m-auto text-center hover:border-gray-600 hover:text-black">
                <Mono>LINKEDIN</Mono>
              </div>
            </a>  

            <div className="xs:hidden sm:block col-span-1"/>      
          </div>

          <div className="text-lg">
            <p className="mb-3">
              <Mono>Web programming</Mono> is the field that strikes me most and that, to date, also corresponds to my work sector.
            </p>     
            
            <p className="mb-3">
              My work experience begins towards the beginning  of my 17 years and stabilizes at 
              the age of majority, thanks to my insatiable curiosity, desire to do and ambition. 
            </p>

            <p>
              I worked mainly as a <Mono>Full-Stack Developer</Mono>, in team and alone, 
              finding myself, despite my young age, also managing other members of my <Mono>Team</Mono>.
            </p>
          </div>

          <div className="flex grid grid-cols-10 mt-12 py-2">
            <a href="https://buildyourpath.it" target="_blank" className="col-span-4 mt-5">
              <img className="xs:w-32 sm:w-64 m-auto pointer-events-none" src="partners/byp.png" />
            </a>   

            <a href="https://pulsing.io" target="_blank" className="col-span-2">
              <img className="xs:w-16 sm:w-24 m-auto pointer-events-none" src="partners/pulsing.png" />
            </a>   

            <a href="https://aryel.io" target="_blank" className="col-span-4 mt-5">
              <img className="xs:w-24 sm:w-48 m-auto pointer-events-none" src="partners/aryel.png" />
            </a>       
          </div>
        </div>

        <div id="skills" className="mt-12 py-2">
          <h1 className="text-3xl font-semibold mb-3">Skills and Knowledge 🚩</h1>

          <span className="text-lg">
            <p className="mb-4">
              The difference between a decent and a good programmer is certainly dictated by the <Mono>Skills</Mono>, the <Mono>Knowledge</Mono> and
              the <Mono>Habits</Mono> he has developed in his career. 
            </p>

            <p className="mb-4">
              Since I started, I have always focused on learning well and without 
              haste one technology at a time, increasing and speeding up my learning curve more and more, 
              coming today to know multiple <Mono>Languages</Mono>, <Mono>Frameworks</Mono> and <Mono>Tools</Mono> useful for my work.
            </p>

            <p className="mb-6">
              Below, I list most of my <Mono>Skills</Mono> related to Web-Developing which I consider most useful or noteworthy.
              If you want to know more, you can contact me through the appropriate section! 
            </p>

            <Mark color="yellow" intensity="300">The percentages allow you to understand my experience in the field</Mark>
          </span>

          <Section title="Programming and Markup Languages" skills={ skills.languages } className="mt-10" />

          <Section title="Libraries and Frameworks" skills={ skills.frameworks } className="mt-6" />

          <Section title="Tools and Services" skills={ skills.tools } className="mt-6" />
        </div>

        <div id="contacts" className="mt-10 mb-6">
          <h1 className="text-3xl font-semibold mb-3">Get in Touch 📌</h1>

          <span className="text-lg">
            <p className="mb-5">
              If you are interested in contacting me to propose a <Mono>Collaboration</Mono>, a <Mono>Job offer</Mono>, 
              an idea for a <Mono>Project</Mono> or just to express your opinion on one of my work, you are in the right place!
            </p>

            <p className="mb-1">
              You can use the informations below to reach me manually:
            </p>

            <ul className="mb-5">
              <li>&#8226;&nbsp; 📨 <a href="mailto:davidecasale2002@gmail.com?subject=Hi Davide! I have an Amazing Proposal for you."><Enlight>davidecasale2002@gmail.com</Enlight></a></li>
              <li>&#8226;&nbsp; 🖥️ <a href="tel:+39340-259-8159"><Enlight>+39 340 259 8159</Enlight></a></li>
            </ul>

            <p className="mb-4">
              Otherwise, you can complete the <Mono>Form</Mono> below   
              to contact me directly.
            </p>
            
            <Mark color="yellow" intensity="300">I will get back to you within 24 Hours </Mark>
          </span>

          <Contact className="mt-6" /> 
        </div>
      </div>
    </div>
  )
}

export default Home;