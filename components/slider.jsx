import React, { useState } from "react";
import Head from "next/head";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

const Slider = (props) => (
  <div className="slide-container">
    <Slide infinite={true} autoplay={false}>
      <div className="each-slide">
        <img className="w-full pointer-events-none" src="slides/python.png"/>           
      </div>

      <div className="each-slide">
        <img className="w-full pointer-events-none" src="slides/type-script.png"/>           
      </div>

      <div className="each-slide">
        <img className="w-full pointer-events-none" src="slides/cpp.png"/>           
      </div>
    </Slide>
  </div>
);

export default Slider;