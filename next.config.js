const withCSS = require("@zeit/next-css");

const { 
  PHASE_DEVELOPMENT_SERVER, 
  PHASE_PRODUCTION_BUILD 
} = require("next/constants");

module.exports = withCSS({
  env: {
    KEY: process.env.KEY,

    FROM: process.env.FROM,
    TO: process.env.TO
  }
});