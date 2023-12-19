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
    width: 100%;
    min-height: 100vh;
    margin: 0em auto;
    padding: 2rem;
    text-align: center;
    background-image: 
    radial-gradient(
    circle, rgb(218, 218, 218) 60%, 
    rgb(255, 245, 180) 100%);
  }

  header{
    position: fixed;
    z-index: 5;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 4.4rem;
    width: 80vw; 
    padding-top: 0.45rem;
    margin-bottom: 1rem;
    right: 225px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  }

  .heading{
    position: fixed;
    align-self: center;
    top: 6rem;
    margin-top: 4rem;
    margin-bottom: 12rem;
    text-shadow: 0px 8px 1rem rgba(0, 0, 0, 0.4);
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

/*   .art_piece_preview{
    z-index: 0;
    top: 22rem;
  } */

  .image_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 32rem;
    padding: 0.4rem;s
    background: whitesmoke;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.4);
  }

  img {
    margin-bottom: 1rem;
    margin-top: 0.8rem;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);
  }
  img:hover{
    cursor: pointer;
    transform: scale(1.01);
    transition: 0.2s;
    transition-timing-function: ease-in-out;
  }
  .artist_description{
    margin: 0.4rem;
  }
  .favourite_icon{
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-top: 5%;
    margin-left: 80%;
  }
  .clear_icon{
    opacity: 0.25;
  }

  .backButton{
    width: 8rem;
    height: 2.4rem;
    padding: 0.25rem;
    border: none;
    border-radius: 4px
    margin-left: 36rem;
    margin-bottom: 2rem;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.4);
  }

`;
