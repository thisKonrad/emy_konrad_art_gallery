import Card from "./Card";

export default function Spotlight({ piece, onToggleFavourite, artPiecesInfo }) {
  return (
    <div className="spotlight_wrap">
      <Card
        piece={piece}
        artPiecesInfo={artPiecesInfo}
        onToggleFavourite={onToggleFavourite} />
    </div>
  );
}
