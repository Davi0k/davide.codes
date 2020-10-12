import React, { useState } from "react";
import Head from "next/head";

const Navigation = (props) => (
  <ul className="flex h-10 grid grid-cols-12 px-2">
    <div className="xs:col-span-3 md:col-span-2">
      <a href="https://github.com/Davi0k/davide.codes" target="_blank">
        <img className="w-32 pointer-cursor" src="logo.png" alt="Logo"/>
      </a> 
    </div>

    <div className="xs:col-span-1 md:col-span-1 lg:col-span-3"/>
    
    <li className="col-span-2 mr-4 py-1 text-center py-4">
      <a className="text-xl text-gray-600 hover:text-gray-800 font-medium" href="#about">
        <span className="xs:hidden sm:block">About Me</span>
        <span className="xs:block sm:hidden">About</span>
      </a>
    </li>

    <li className="xs:col-span-3 sm:col-span-4 lg:col-span-3 mr-4 py-1 text-center py-4">
      <a className="text-xl text-gray-600 hover:text-gray-800 font-medium" href="#skills">
        <span className="xs:hidden sm:block">Skills and Knowledge</span>
        <span className="xs:block sm:hidden">Skills</span>
      </a>
    </li>

    <li className="xs:col-span-2 sm:col-span-3 lg:col-span-2 mr-4 py-1 text-center py-4">
      <a className="text-xl text-gray-600 hover:text-gray-800 font-medium" href="#contacts">
        <span className="xs:hidden sm:block">Get in Touch</span>
        <span className="xs:block sm:hidden">Contact</span>
      </a>
    </li>
  </ul>
);

export default Navigation;