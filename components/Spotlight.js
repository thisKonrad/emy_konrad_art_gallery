import Card from "./Card";

export default function Spotlight({ piece, artPiecesInfo }) {
  return (
    <div className="spotlight_wrap">
      <Card piece={piece} artPiecesInfo={artPiecesInfo} />
    </div>
  );
}
