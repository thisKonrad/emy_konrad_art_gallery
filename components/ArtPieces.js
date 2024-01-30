/* :: ART PIECES :: */
import Card from "./Card";
import ArtPieceListStyle from '../styles/ArtPieceListStyle.module.css';


export default function ArtPieces({
  pieces,
  onToggleFavourite,
  artPiecesInfo }) {


  return (
    <div className={ArtPieceListStyle.preview}>
      <ul
        name="art piece list"
        className={ArtPieceListStyle.list}
      >
        {pieces &&
          pieces.map((piece) => (
            <li key={piece.slug}>
              <Card
                className={ArtPieceListStyle.card}
                key={piece.slug}
                piece={piece}
                artPiecesInfo={artPiecesInfo}
                onToggleFavourite={onToggleFavourite} />
            </li>
          ))}
      </ul>
    </div>
  );
}
