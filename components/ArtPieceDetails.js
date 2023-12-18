import Card from "./Card";
import Comments from "./Comments";
import CommentForm from "./CommentForm";


export default function ArtPieceDetails({ piece, onToggleFavourite, comments, addComment }) {
  return (
    <>
      <header></header>
      <div>
        <button type="button">←</button>
        <Card
          piece={piece}
          onToggleFavourite={onToggleFavourite}
        ></Card>
        <div className="colorPicker"></div>
        <div>
          <h2>FamousArtis:{piece.artist}</h2>
          <p>Year: {piece.year}</p>
          <p>Genre: {piece.genre}</p>
          <p>Genre: {piece.color}</p>
        </div>
      </div>
      <div>
        <br />
        {comments && <Comments comments={comments} />}
        <CommentForm addComment={addComment} />
      </div>
    </>
  );
}
