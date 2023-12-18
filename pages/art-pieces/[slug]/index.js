import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  console.log("slug index", pieces);
  // const [selectedArtPiece, setSelectedArtPiece] = useState("");
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log(selectedArtPiece);

  return (
    <ArtPieceDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.title}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    ></ArtPieceDetails>
  );
}
