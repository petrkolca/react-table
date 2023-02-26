import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    background: -webkit-linear-gradient(67.2deg,  rgba(37,208,199,1) -7.5%, rgba(165,90,240,1) 62.7%);
    background: linear-gradient(67.2deg,  rgba(37,208,199,1) -7.5%, rgba(165,90,240,1) 62.7%);
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
  }

  .container {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    background: white;
    max-height: 600px;
    overflow-y: scroll;
    // -webkit-transform: translate(-50%, -50%);
    // transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;