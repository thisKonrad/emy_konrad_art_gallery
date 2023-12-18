import Spotlight from "../components/Spotlight.js";

export default function SpotlightPage({ pieces }) {
  console.log("Pieces: ", pieces);
  /* if not undefined than length */
  if (!pieces.length) {
    return null;
  }

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1 className="heading">Art Gallery</h1>
      <Spotlight piece={randomPiece} />
    </>
  );
}
