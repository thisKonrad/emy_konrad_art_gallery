import Image from "next/image";
import { useState } from "react";


export default function Spotlight({ image, artist, title}) {

  const[favourite, setFavourite]= useState(true);
  function handleToggle(){
    setFavourite(!favourite)
  }

  return (
    <div className="spotlight_wrap">
    <button className ="favourite_icon"
     onClick={()=>handleToggle()}>{
      favourite ?
      <Image 
      className ="clear_icon"
      width={25}
      height={25}
      src='Heart_Clear.svg' 
      alt='clear-heart'></Image> :
     <Image 
      width={25}
      height={25}
      src='Heart_Filled.svg' 
      alt='filled-heart'></Image> }
    </button>
    <Image
    src={image}
    height={540}
    width={540}
    alt={title}/>
    <div className='artwork_description'>
    <h3 >Artist name: {artist}</h3>
    <h4 >Title: {title}</h4>
    </div>
  </div>);
}
