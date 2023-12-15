import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArtPieceDetailsPage({ pieces }) {
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [setSelectedArtPiece, pieces, slug]);

  return (
    <ArtPieceDetailsPage
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.title}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    ></ArtPieceDetailsPage>
  );
}
