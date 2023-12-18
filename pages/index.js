import Spotlight from "../components/Spotlight.js";

export default function SpotlightPage({ pieces, isFavourite, onToggleFavourite }) {
  console.log("Pieces: ", pieces);
  /* if not undefined than length */
  if (!pieces.length) {
    return null;
  }

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1 className="heading">Spotlight</h1>
      <Spotlight piece={randomPiece} isFavourite={isFavourite} onToggle={onToggleFavourite} />
    </>
  );
}
