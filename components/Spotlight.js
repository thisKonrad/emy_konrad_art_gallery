import Card from "./Card";

export default function Spotlight({ piece }) {
  return (
    <div className="spotlight_wrap">
      <Card piece={piece} />
    </div>
  );
}
