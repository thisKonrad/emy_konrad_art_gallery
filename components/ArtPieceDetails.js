import Card from "./Card";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Link from "next/link";
import DetailStyles from '../styles/DetailStyles.module.css'


export default function ArtPieceDetails({
  piece,
  onToggleFavourite,
  artPiecesInfo,
  comments,
  addComment }) {
  return (
    <>
      <div>
        <button type="button" className={DetailStyles.back_button}>
          <Link href={'/art-pieces'}>← back</Link></button>
        <Card
          piece={piece}
          onToggleFavourite={onToggleFavourite}
          artPiecesInfo={artPiecesInfo}
        ></Card>
        <div className="colorPicker"></div>
        <div>
          <h2>FamousArtis:{piece.artist}</h2>
          <p>Year: {piece.year}</p>
          <p>Genre: {piece.genre}</p>
          <p>Genre: {piece.color}</p>
        </div>
      </div >
      <div>
        <br />
        {comments && <Comments comments={comments} />}
        <CommentForm addComment={addComment} />
      </div>
    </>
  );
}
