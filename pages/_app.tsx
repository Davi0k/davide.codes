import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>Davide Casale | Full-Stack Developer</title>

      <meta name="description" content="
        Hi! My name is Davide Casale, and I'm a Full-Stack Developer. 
        This is my personal Web-Site, if you want to know more about me you are in the right place.
      "/>
    </Head>

    <Component {...pageProps} />
  </div>
);

export default App;