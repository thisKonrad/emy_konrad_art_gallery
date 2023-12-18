import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces, comments, addComment }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log(selectedArtPiece);

  return (
    <ArtPieceDetails
      piece={selectedArtPiece}
      comments={comments}
      addComment={addComment}
    ></ArtPieceDetails>
  );
}
