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
  <mark className={`bg-${props.color || "yellow"}-${props.intensity || "200"}`}>
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
          <h1 className="text-3xl font-medium mb-3">Skills and Knowledge ⚡</h1>

          <span className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>

          <div className="mt-10 mb-10 block">
            <h1 className="text-xl mb-5 font-semibold">&#8226; Main Programming and Markup Languages:</h1>

            <span className="text-lg">
              Everything always starts with the best <Bold>Programming Languages</Bold>! 
              Since I started my career in the world of <Underline>Information Technology</Underline>, 
              I have always tested myself with the most complex languages,
              without however neglecting the <Mark>most popular</Mark> and <Mark>constantly growing</Mark> ones,
              which today make up the majority of my <Bold>Arsenal</Bold>. 
            </span>

            <div className="mt-4">
              { skills.languages.map(section => <Skill section={section} key={skills.languages.indexOf(section)}/>) }
            </div>
          </div>

          <div className="mb-10 block">
            <h1 className="text-xl mb-6 font-semibold">&#8226; Main Libraries and Frameworks:</h1>

            <span className="text-lg">
              <Bold>Libraries</Bold> and <Bold>Frameworks</Bold> are now the foundation of any reputable <Mark>Software</Mark>. 
              Being a <Underline>Full-Stack Developer</Underline>, there are many that I use, selecting them based on the final goal. 
              From those dedicated to the <Bold>Back-End</Bold> development to those dedicated to the <Bold>Front-End</Bold>.
            </span>

            <div className="mt-4">
              { skills.frameworks.map(section => <Skill section={section} key={skills.frameworks.indexOf(section)}/>) }
            </div>
          </div>

          <div className="mb-2 block">
            <h1 className="text-xl mb-6 font-semibold">&#8226; Main Tools and Services:</h1>

            <span className="text-lg">
              Like any respected <Bold>Developer</Bold>, I am not lacking in knowledge about all that range of tools and services essential 
              to guarantee an ideal <Mark>Work-Flow</Mark>. Starting from <Underline>Version Control Systems</Underline> (and related services) 
              up to the best <Underline>DBMS</Underline>.
            </span>

            <div className="mt-4">
              { skills.tools.map(section => <Skill section={section} key={skills.tools.indexOf(section)}/>) }
            </div>
          </div>

          <Slider />
        </div>

        <div id="contacts" className="mt-4 mb-8">
          <h1 className="text-3xl font-medium mb-3">Contact Me Now 🥼</h1>

          <span className="text-lg">
            If you are interested in contacting me to propose a <Bold>collaboration</Bold> , a <Bold>job offer</Bold>, 
            an <Bold>idea for a project</Bold> or just to express <Bold>your opinion</Bold> on one of my work, <Underline>you are in the right place</Underline>!
            You can complete the small <Mark color="blue">Form</Mark> below 
            by providing any of your contacts and a small description of your motivation, 
            or you can write me and send me an <Mark color="blue">E-Mail</Mark> directly. 
            
            <br/><br/> 
            
            <Mark color="green" intensity="300">I'll get back to you within 24 Hours 💬</Mark>
          </span>

          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home;