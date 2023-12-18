import ImageContainer from "./ImageContainer";

export default function ArtPieces({ pieces }) {
  return (
    <div className="art_piece_preview">
      <ul>
        {pieces &&
          pieces.map((piece) => (
            <li key={piece.slug}>
              <ImageContainer key={piece.slug} piece={piece} />
            </li>
          ))}
      </ul>
    </div>
  );
}
