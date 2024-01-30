/* :: ART PIECES DETAILS :: */
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


  return (<main>
    <section
      className={DetailStyles.details_wrap}
    >
      <button
        type="button"
        className={DetailStyles.back_button}
      >
        <Link href={'/art-pieces'}>← back</Link></button>
      <Card
        piece={piece}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      ></Card>
      <div>
        <p>FamousArtis:</p>
        <p>{piece.artist}</p>
        <p>Year: </p>
        <p>{piece.year}</p>
        <p>Genre: </p>
        <p>{piece.genre}</p>
        <p>Genre:</p>
        <p> {piece.color}</p>
      </div>
      <div>
        <br />
        {comments && <Comments comments={comments} />}
        <CommentForm addComment={addComment} />
      </div>
    </ section>

  </main>);
}
