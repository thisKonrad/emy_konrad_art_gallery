/* :: ART PIECES DETAILS :: */
import Card from "./Card";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Link from "next/link";
import { BsChevronDoubleLeft } from "react-icons/bs";
import DetailStyles from '../styles/DetailStyles.module.css';


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
        <Link
          className={DetailStyles.back_button_content}
          href={'/art-pieces'}>
          < BsChevronDoubleLeft />
        </Link>
      </button>
      <Card
        piece={piece}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      ></Card>
      <div>
        <p
          className={DetailStyles.title}
        >Year: </p>
        <p
          className={DetailStyles.paragraph}>
          {piece.year}</p>
        <br></br>
        <p
          className={DetailStyles.title}
        >Genre:</p>
        <p
          className={DetailStyles.paragraph}
        >{piece.genre}</p>
        <br></br>
        <p
          className={DetailStyles.title}
        >Colors:</p>

        <section
          className={DetailStyles.color_wrap}>
          <div
            className={DetailStyles.color_pattern}
            style={{ backgroundColor: `${piece.colors[0]}` }}
          > {piece.colors[0]}
          </div>
          <div
            className={DetailStyles.color_pattern}
            style={{ backgroundColor: `${piece.colors[1]}` }}
          > {piece.colors[1]}</div>
          <div
            className={DetailStyles.color_pattern}
            style={{ backgroundColor: `${piece.colors[2]}` }}
          > {piece.colors[2]}</div>
          <div
            className={DetailStyles.color_pattern}
            style={{ backgroundColor: `${piece.colors[3]}` }}
          >{piece.colors[3]}</div>
        </section>

        <p
          className={DetailStyles.comment_title}
        >Comments:</p>
      </div>
      <div>
        <br />
        {comments && <Comments comments={comments} />}
        <CommentForm addComment={addComment} />
      </div>
    </ section>

  </main>);
}
