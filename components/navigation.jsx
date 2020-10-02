import React, { useState } from "react";
import Head from "next/head";

const Navigation = (props) => (
  <ul className="flex h-10 grid grid-cols-12 px-2">
    <div className="col-span-1">
      <img className="w-12 opacity-75 pointer-events-none" src="logo.png" alt="Logo"/>
    </div>

    <div className="col-span-4"/>
    
    <li className="col-span-2 mr-4 py-1 text-center">
      <a className="text-xl text-gray-600 hover:text-gray-800" href="#about">About Me</a>
    </li>

    <li className="col-span-3 mr-4 py-1 text-center">
      <a className="text-xl text-gray-600 hover:text-gray-800" href="#skills">Skills & Knowledge</a>
    </li>

    <li className="col-span-2 mr-4 py-1 text-center">
      <a className="text-xl text-gray-600 hover:text-gray-800" href="#contacts">Contacts & Links</a>
    </li>
  </ul>
);

export default Navigation;