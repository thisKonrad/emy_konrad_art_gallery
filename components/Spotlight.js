/* :::: SPOTLIGHT :::: */
import Card from "./Card";


export default function Spotlight({ piece, onToggleFavourite, artPiecesInfo }) {

  return (<Card
    piece={piece}
    artPiecesInfo={artPiecesInfo}
    onToggleFavourite={onToggleFavourite} />);
}
