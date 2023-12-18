import Card from "./Card";

export default function ArtPieces({ pieces, isFavourite, onToggleFavourite }) {
  return (
    <div className="art_piece_preview">
      <ul>
        {pieces &&
          pieces.map((piece) => (
            <li key={piece.slug}>
              <Card
                key={piece.slug}
                piece={piece}
                isFavourite={isFavourite}
                onToggleFavourite={onToggleFavourite} />
            </li>
          ))}
      </ul>
    </div>
  );
}
