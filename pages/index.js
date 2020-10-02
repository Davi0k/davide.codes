import React, { useState } from "react";
import Head from "next/head";

import Navigation from "../components/navigation";
import Skill from "../components/skill";
import Slider from "../components/slider";
import Contact from "../components/contact";

import * as skills from "../utilities/skills";

const Home = (props) => {
  const age = (birthday) => {
    birthday = new Date(birthday);
    return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
  }

  return (
    <div className="container max-w-screen-lg mx-auto py-2">
      <Navigation />

      <div className="px-5 py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-40 py-16">
            <h1 className="text-5xl font-semibold">Davide Casale 👋🏻</h1>
            <span className="text-xl text-gray-600">{age(new Date("2002-05-02"))} Years Old Full-Stack Developer & Programmer based in Italy.</span>
          </div>

          <div className="col-span-1 h-40">
            <img className="float-right w-56 pointer-events-none" src="profile.png" alt="Profile"/>
          </div>
        </div>

        <div id="about" className="py-20">
          <h1 className="text-3xl font-medium mb-2">About Me 🧑🏻</h1>

          <span className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            <br/><br/>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div id="skills" className="py-4">
          <h1 className="text-3xl font-medium mb-2">Skills & Knowledge ⚡</h1>

          <span className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>

          <div className="mb-10 mt-10">
            <h1 className="text-xl mb-5 font-semibold">&#8226; Main Programming and Markup Languages:</h1>

            <span className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>

            <div className="mt-6">
              { skills.languages.map(section => <Skill section={section} key={skills.languages.indexOf(section)}/>) }
            </div>
          </div>

          <div className="mb-10 block">
            <h1 className="text-xl mb-6 font-semibold">&#8226; Main Frameworks and Libraries:</h1>

            <span className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>

            <div className="mt-6">
              { skills.frameworks.map(section => <Skill section={section} key={skills.frameworks.indexOf(section)}/>) }
            </div>
          </div>

          <div className="mb-2 block">
            <h1 className="text-xl mb-6 font-semibold">&#8226; Main Tools and Services:</h1>

            <span className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </span>

            <div className="mt-6">
              { skills.tools.map(section => <Skill section={section} key={skills.tools.indexOf(section)}/>) }
            </div>
          </div>

          <Slider />
        </div>

        <div className="flex grid grid-cols-10 mb-10">
          <a href="https://buildyourpath.it" target="_blank" className="col-span-4 mt-4 py-1">
            <img className="w-64 m-auto pointer-events-none" src="partners/byp.png" />
          </a>   

          <a href="https://pulsing.io" target="_blank" className="col-span-2 py-1">
            <img className="w-20 m-auto pointer-events-none" src="partners/pulsing.png" />
          </a>   

          <a href="https://aryel.io" target="_blank" className="col-span-4 mt-4 py-1">
            <img className="w-40 m-auto pointer-events-none" src="partners/aryel.png" />
          </a>       
        </div>

        <div id="contacts">
          <h1 className="text-3xl font-medium mb-2">Contacts & Links 🥼</h1>

          <span className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </span>

          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home;