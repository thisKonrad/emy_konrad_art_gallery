import Card from "./Card";


export default function ArtPieces({
  pieces,
  onToggleFavourite,
  artPiecesInfo }) {
  return (
    <div className="art_piece_preview">
      <ul>
        {pieces &&
          pieces.map((piece) => (
            <li key={piece.slug}>
              <Card
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
