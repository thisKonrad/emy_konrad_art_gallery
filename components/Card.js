import ImageContainer from "./ImageContainer";
import FavouriteButton from "./FavouriteButton.js";


export default function Card({ piece, onToggleFavourite, artPiecesInfo }) {


  return (
    <div className="image_container">
      <FavouriteButton
        artPiecesInfo={artPiecesInfo}
        piece={piece}
        onToggleFavourite={onToggleFavourite}
      />
      <ImageContainer
        piece={piece} />
      <div className="artwork_description">
        <h3>Artist name: {piece.artist}</h3>
        <h3>Title: {piece.name}</h3>
      </div>
    </div>
  );
}
