import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArtPieceDetailsPage({ pieces }) {
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  const found = pieces.find((piece) => piece.slug === slug);
  useEffect(() => {
    found;
  }, [found, pieces, slug]);

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
