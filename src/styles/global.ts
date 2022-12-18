import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;

    --font-text: 'Roboto', sans-serif;
    --font-title: 'Montserrat', sans-serif;

    --color-main: #004182;
    --color-main-hover: #8AC400f0;
    --color-main-active: #8AC400d0;
    --color-highlight: #00ffff;
    --color-highlight-alt: #5801E4;
    --color-highlight-active: #2b00b3e0;
    --color-bg: #100e1a;
    --color-bg-smooth: #16161c;

    --color-border-dark: #151515;
    --color-link-text: #00ffff;

    --color-linkedin: #004182;
    --color-linkedin-hover: #003071;
    --color-github: #2c3138;
    --color-github-hover: #1c2128;

    --color-white: #fff;
    --color-off-white: #eee;
    --color-dark-gray: #444;
    --color-dark-gray-hover: #3a3a3a;
    --color-dark-gray-active: #333;
    --color-black: #000;
    --color-purple: #5801E4;


    --transition: all 0.25s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    min-height: 100vh;
    height: 100%;
    background: var(--color-bg);
    overflow-y: scroll;
    transition: all 0.5s ease;
  }

  li {
    list-style: none;
  }

  body, button, input, ::placeholder {
    font-family: var(--font-text);
    color: var(--color-white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-black);
    border-radius: 8px;
    border: 1px solid var(--color-border-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-dark-gray);
    border-radius: 8px;
    border: 1px solid var(--color-border-dark);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-dark-gray-hover);
  }

  ::-webkit-scrollbar-thumb:active {
    background: var(--color-dark-gray-active);
  }
`

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  laptopXL: "1920px",
  _4k: "2560px",
}

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  laptopXL: `(min-width: ${sizes.laptopXL})`,
  desktop: `(min-width: ${sizes._4k})`,
}