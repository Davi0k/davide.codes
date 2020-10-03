import React, { useState } from "react";
import Head from "next/head";

const Navigation = (props) => (
  <ul className="flex h-10 grid grid-cols-12 px-2">
    <div className="xs:col-span-3 md:col-span-2">
      <img className="w-32 pointer-events-none" src="logo.png" alt="Logo"/>
    </div>

    <div className="xs:col-span-1 md:col-span-1 lg:col-span-3"/>
    
    <li className="col-span-2 mr-4 py-1 text-center py-4">
      <a className="text-xl text-gray-600 hover:text-gray-800" href="#about">
        <span className="xs:hidden sm:block">About Me</span>
        <span className="xs:block sm:hidden">About</span>
      </a>
    </li>

    <li className="xs:col-span-3 sm:col-span-4 lg:col-span-3 mr-4 py-1 text-center py-4">
      <a className="text-xl text-gray-600 hover:text-gray-800" href="#skills">
        <span className="xs:hidden sm:block">Skills & Knowledge</span>
        <span className="xs:block sm:hidden">Skills</span>
      </a>
    </li>

    <li className="xs:col-span-2 sm:col-span-3 lg:col-span-2 mr-4 py-1 text-center py-4">
      <a className="text-xl text-gray-600 hover:text-gray-800" href="#contacts">
        <span className="xs:hidden sm:block">Contacts & Links</span>
        <span className="xs:block sm:hidden">Contacts</span>
      </a>
    </li>
  </ul>
);

export default Navigation;