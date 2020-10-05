import React, { useState } from "react";
import Head from "next/head";

import Navigation from "../components/navigation";
import Skill from "../components/skill";
import Slider from "../components/slider";
import Contact from "../components/contact";

import * as skills from "../utilities/skills";

const Bold = (props) => <b className="font-semibold text-1xl">{props.children}</b>;

const Underline = (props) => <span className="underline text-1xl font-light">{props.children}</span>;

const Mark = (props) => (
  <mark className={`bg-${props.color || "yellow"}-${props.intensity || "200"} text-xl`}>
    &nbsp; {props.children} &nbsp;
  </mark>
);

const Home = (props) => {
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
            <h1 className="text-5xl font-semibold">Davide Casale 👋🏻</h1>
            <span className="text-xl text-gray-600">{age(new Date("2002-05-02"))} Years Old Full-Stack Developer & Programmer based in Italy.</span>
          </div>

          <div className="xs:col-span-0 sm:col-span-1 xs:hidden sm:block h-40"> 
            <img className="float-right w-56 pointer-events-none" src="profile.png" alt="Profile"/>
          </div>
        </div>

        <div id="about" className="mt-20 mb-12">
          <h1 className="text-3xl font-medium mb-3">About Me 🧑🏻</h1>

          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="flex grid xs:grid-cols-2 sm:grid-cols-6 mt-10 mb-12">
            <div className="xs:hidden sm:block col-span-1"/>

            <a href="https://www.github.com/Davi0k" target="_blank" className="xs:col-span-1 sm:col-span-2">
              <div className="w-40 uppercase text-3xl font-mono border-b-8 border-gray-500 text-gray-800 m-auto text-center hover:border-gray-600 hover:text-black">
                GITHUB
              </div>
            </a>  

            <a href="https://www.linkedin.com/in/davide-casale-2002/" target="_blank" className="xs:col-span-1 sm:col-span-2">
              <div className="w-40 uppercase text-3xl font-mono border-b-8 border-gray-500 text-gray-800 m-auto text-center hover:border-gray-600 hover:text-black">
                LINKEDIN
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

        <div id="skills" className="py-2">
          <h1 className="text-3xl font-medium mb-3">Skills and Knowledge 🚩</h1>

          <span className="text-lg">
            <p className="mb-4">
              The difference between a decent and a good programmer is certainly dictated by the skills, 
              knowledge and skills he has developed in his career. I often define myself as "T-Shaped", a 
              programmer with great experience in a single and vast field (such as Web-Developing) but 
              who does not neglect other branches of his profession. 
            </p>
          
            <p className="mb-4">
              In fact, in addition to the world of Web Programming, 
              I also love working at a low level, especially with Embedded Systems, 
              and also with the most modern platforms for VR, AR and MR. 
            </p>

            <p> 
              Below, I list most of my Skills grouped by macro-categories. 
              If you want to know more, you can contact me through the appropriate section! 
            </p>     
          </span>

          <div className="mt-10 block">
            <h1 className="text-2xl mb-4 font-semibold">⭐&nbsp;&nbsp;Programming and Markup Languages:</h1>

            <span className="text-lg">
              <p className="mb-4">
                Everything always starts with the best Programming Languages! 
                Since I started my career in the world of Information Technology, 
                I have always tested myself with the most complex languages,
                without however neglecting the most popular and constantly growing ones,
                which today make up the majority of my Arsenal.  
              </p>

              <p>

              </p>
            </span>

            <div className="mt-5">
              { skills.languages.map(section => <Skill section={section} key={skills.languages.indexOf(section)}/>) }
            </div>
          </div>

          <div className="mt-10 block">
            <h1 className="text-2xl mb-4 font-semibold">⭐&nbsp;&nbsp;Libraries and Frameworks:</h1>

            <span className="text-lg">
              <p className="mb-4">
                Libraries and Frameworks are now the foundation of any reputable Software. 
                Being a Full-Stack Developer, there are many that I use, selecting them based on the final goal. 
                From those dedicated to the Back-End to those dedicated to the Front-End.
              </p>

              <p>

              </p>
            </span>

            <div className="mt-5">
              { skills.frameworks.map(section => <Skill section={section} key={skills.frameworks.indexOf(section)}/>) }
            </div>
          </div>

          <div className="mt-10 block">
            <h1 className="text-2xl mb-4 font-semibold">⭐&nbsp;&nbsp;Tools and Services:</h1>

            <span className="text-lg">
              <p className="mb-4">
                Like any respected Developer, I am not lacking in knowledge about all that range of Tools and Services essential 
                to guarantee an ideal Work-Flow. Starting from the most used Version Control Systems, moving on to the most popular Package Managers, 
                up to the best DBMS.
              </p>

              <p>
                
              </p>
            </span>

            <div className="mt-5">
              { skills.tools.map(section => <Skill section={section} key={skills.tools.indexOf(section)}/>) }
            </div>
          </div>

          <Slider />
        </div>

        <div id="contacts" className="mt-6 mb-8">
          <h1 className="text-3xl font-medium mb-3">Contact Me Now 💬</h1>

          <span className="text-lg">
            <p className="mb-4">
              If you are interested in contacting me to propose a collaboration, a job offer, 
              an idea for a project or just to express your opinion on one of my work, you are in the right place!
            </p>

            <p className="mb-8">
              You can complete the Form below 
              by providing any of your contacts and a small description of your motivation, 
              or you can write me and send me an E-Mail directly. Once I have received your message, 
              I will reply to you on the contact provided or the address used to contact me!
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