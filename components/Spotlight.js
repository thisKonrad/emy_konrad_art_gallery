import Card from "./Card";

export default function Spotlight({ piece, isFavourite, onToggleFavourite }) {
  return (
    <div className="spotlight_wrap">
      <Card
        piece={piece}
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite} />
    </div>
  );
}
