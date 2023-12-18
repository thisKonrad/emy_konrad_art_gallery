import Link from "next/link";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div className="art_piece_preview">
      <ul>
        {pieces &&
          pieces.map((piece) => (
            <li key={piece.slug}>
              <Link href={`/art-pieces/${piece.slug}`}>
                <ArtPiecePreview
                  title={piece.name}
                  image={piece.imageSource}
                  artist={piece.artist}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
