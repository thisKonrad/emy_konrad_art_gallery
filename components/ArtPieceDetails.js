import ImageContainer from "./ImageContainer";

export default function ArtPieceDetails({ piece }) {
  return (
    <>
      <header></header>
      <div>
        <button type="button">←</button>
        <ImageContainer piece={piece}></ImageContainer>
        <div className="colorPicker"></div>
        <div>
          <h2>FamousArtis:{piece.artist}</h2>
          <p>Year: {piece.year}</p>
          <p>Genre: {piece.genre}</p>
          <p>Genre: {piece.color}</p>
        </div>
      </div>
      <div>
        <h2>Comments:</h2>
      </div>
    </>
  );
}
