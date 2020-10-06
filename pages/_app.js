import React, { useState } from "react";
import Head from "next/head";

import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <title>Davide Casale | Full-Stack Developer</title>
    </Head>

    <Component {...pageProps} />
  </div>
);

export default App