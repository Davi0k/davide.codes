import React, { useState } from "react";
import Head from "next/head";

import Navigation from "../components/navigation";
import Contact from "../components/contact";
import Section from "../components/section";

import * as skills from "../utilities/skills";

const Enlight = (props) => <span className="text-xl font-medium text-blue-600 cursor-pointer">{props.children}</span>;

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
            <h1 className="text-5xl font-semibold">Davide Casale <span className="wave">👋🏻</span></h1>
            <span className="text-xl text-gray-600">{age(birthday)} Years Old Full-Stack Developer & Programmer based in Italy.</span>
          </div>

          <div className="xs:col-span-0 sm:col-span-1 xs:hidden sm:block h-40"> 
            <img className="float-right w-56 pointer-events-none" src="profile.png" alt="Profile"/>
          </div>
        </div>

        <div id="about" className="mt-20">
          <h1 className="text-3xl font-semibold mb-3">About Me 🧑🏻</h1>

          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="flex grid grid-cols-10 mt-16">
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
              The difference between a decent and a good programmer is certainly dictated by <Mono>the skills, the
              knowledge and the habits</Mono> he has developed in his career. I often define myself as <Mono>T-Shape</Mono>, a 
              programmer with great experience in a single and vast field, such as <Mono>Web-Developing</Mono>, but 
              who does not neglect other branches of his profession. 
            </p>
          
            <p className="mb-4">
              In fact, in addition to the world of Web Programming, 
              I also love working at a low level 
              and also with the most modern platforms for <Mono>VR</Mono>, <Mono>AR</Mono> and <Mono>MR</Mono>. 
            </p>

            <p className="mb-4"> 
              Below, I list most of my <Mono>Skills</Mono> related to Web-Developing.
              If you want to know more, you can contact me through the appropriate section! 
            </p>  

            <Mark color="yellow" intensity="300">The percentages allow you to understand my experience in the field</Mark>
          </span>

          <Section title="Programming and Markup Languages" skills={ skills.languages } />

          <Section title="Libraries and Frameworks" skills={ skills.frameworks } />

          <Section title="Tools and Services" skills={ skills.tools } />
        </div>

        <div id="contacts" className="mt-10 mb-6">
          <h1 className="text-3xl font-semibold mb-3">Get in Touch 📌</h1>

          <span className="text-lg">
            <p className="mb-5">
              If you are interested in contacting me to propose a <Mono>collaboration</Mono>, a <Mono>job offer</Mono>, 
              an idea for a <Mono>project</Mono> or just to express your opinion on one of my work, you are in the right place!
            </p>

            <p className="mb-1">
              You can use the informations below to reach me manually:
            </p>

            <ul className="mb-5">
              <li>&#8226;&nbsp; 📨 <Enlight>davidecasale2002@gmail.com</Enlight></li>
              <li>&#8226;&nbsp; 🖥️ <Enlight>+39 340 259 8159</Enlight></li>
              <li>&#8226;&nbsp; 🏠 <Enlight>Via San Giovanni Bosco, 5. Arcene (BG)</Enlight></li>
            </ul>

            <p className="mb-4">
              Otherwise, you can complete the <Mono>Form</Mono> below   
              or send me an <Mono>E-Mail</Mono> directly.
            </p>
            
            <Mark color="yellow" intensity="300">I will get back to you within 24 Hours</Mark>
          </span>

          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home;