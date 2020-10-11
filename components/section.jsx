import React, { useState } from "react";
import Head from "next/head";

import Skill from "../components/skill";

const Section = (props) => (
  <div className="mt-8 block">
    <h1 className="text-2xl font-semibold">⭐&nbsp;&nbsp;{props.title}:</h1>

    <div className="mt-4">
      { props.skills.map(section => <Skill section={section} key={props.skills.indexOf(section)}/>) }
    </div>
  </div>
);

export default Section;