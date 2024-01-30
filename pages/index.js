import Spotlight from "../components/Spotlight.js";


export default function SpotlightPage({ pieces, onToggleFavourite, artPiecesInfo }) {
  if (!pieces.length) {
    return null;
  }

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>

      <main>
        <p className="heading">Spotlight</p>
        <Spotlight
          classname='spotlight_image'
          piece={randomPiece}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={onToggleFavourite} />
      </main>
    </>
  );
}
