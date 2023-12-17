import Image from "next/image";
import { useState } from "react";


export default function ImageContainer({src, alt, artist}) {

  const[favourite, setFavourite]= useState(true);
  function handleToggle(){
    setFavourite(!favourite)
  }

return (<div className='image_container'>
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
    src={src}
    height={240}
    width={240}
    alt={alt}/>
    <div className='artwork_description'>
    <h3 >Artist name: {artist}</h3>
    <h3 >Title: {alt}</h3>
    </div>
  </div>);
}