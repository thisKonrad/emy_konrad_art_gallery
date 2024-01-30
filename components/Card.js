/* :: CARD :: */
import ImageContainer from "./ImageContainer";
import FavouriteButton from "./FavouriteButton.js";
import ArtPieceCardStyle from '../styles/ArtPieceCardStyle.module.css';



export default function Card({ piece, onToggleFavourite, artPiecesInfo }) {


  return (
    <div className={ArtPieceCardStyle.card_wrap}>
      <FavouriteButton
        artPiecesInfo={artPiecesInfo}
        piece={piece}
        onToggleFavourite={onToggleFavourite}
      />
      <ImageContainer
        piece={piece} />
      <div className={ArtPieceCardStyle.text_wrap}>
        <p
          className={ArtPieceCardStyle.title}
        >Artist name: </p>
        <p
          className={ArtPieceCardStyle.paragraph}
        >{piece.artist}</p>
        <p
          className={ArtPieceCardStyle.title}
        >Title:</p>
        <p
          className={ArtPieceCardStyle.paragraph}
        >{piece.name}</p>
      </div>
    </div>
  );
}
