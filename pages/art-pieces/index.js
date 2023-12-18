import ArtPieces from "../../components/ArtPieces";

export default function OverviewPage({ pieces, addComment, artPiecesInfo }) {
  return (
    <div className="overview">
      <h1 className="heading">Art Gallery</h1>
      <ArtPieces pieces={pieces} artPiecesInfo={artPiecesInfo} />
    </div>
  );
}
