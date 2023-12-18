import Image from "next/image";
import { useState } from "react";
import ArtImage from "./ArtImage";

export default function ImageContainer({ piece }) {
  const [favourite, setFavourite] = useState(true);
  function handleToggle() {
    setFavourite(!favourite);
  }
  console.log("piece in container", piece);

  return (
    <div className="image_container">
      <button className="favourite_icon" onClick={() => handleToggle()}>
        {favourite ? (
          <Image
            className="clear_icon"
            width={25}
            height={25}
            src="Heart_Clear.svg"
            alt="clear-heart"
          ></Image>
        ) : (
          <Image
            width={25}
            height={25}
            src="Heart_Filled.svg"
            alt="filled-heart"
          ></Image>
        )}
      </button>
      <ArtImage piece={piece} />
      <div className="artwork_description">
        <h3>Artist name: {piece.artist}</h3>
        <h3>Title: {piece.name}</h3>
        <h3>slug: {piece.slug}</h3>
      </div>
    </div>
  );
}
