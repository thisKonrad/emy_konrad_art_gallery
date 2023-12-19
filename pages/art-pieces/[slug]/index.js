import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
  addComment,
  comments
}) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);


  const selectedArtPieceComments = artPiecesInfo.find(
    (piece) => piece.slug === selectedArtPiece?.slug
  )?.comments;

  return (
    <ArtPieceDetails
      piece={selectedArtPiece}
      artPiecesInfo={artPiecesInfo}
      onToggleFavourite={onToggleFavourite}
      addComment={(newComment) => addComment(selectedArtPiece.slug, newComment)}
      comments={selectedArtPieceComments}
    ></ArtPieceDetails>
  );
}
