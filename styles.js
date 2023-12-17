import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    font-family: 'Courier New', Courier, monospace;
    font-size: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    min-width: 78%;
    min-height: 100vh;
    margin: 0em auto;
    padding: 2rem;
    text-align: center;
    background: radial-gradient(
    circle, rgb(220,219,219) 0%, 
    blanchedalmond 100%);
  }

  h1{
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  h2{
    margin: 1.2rem;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }
  
  a:hover, a:focus {
    text-decoration: underline;
  }

  li{
    display: inline;
    li-style: none;
    margin-left: 3rem;
  }

  img {
    margin-bottom: 3rem;
    margin-top: 0.8rem;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);
  }
  img:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
