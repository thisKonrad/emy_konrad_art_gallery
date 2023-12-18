import Spotlight from "../components/Spotlight.js";

export default function SpotlightPage({ pieces, artPiecesInfo }) {
  if (!pieces.length) {
    return null;
  }

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1 className="heading">Spotlight</h1>
      <Spotlight piece={randomPiece} artPiecesInfo={artPiecesInfo} />
    </>
  );
}
