import ImageContainer from "./ImageContainer";

export default function ArtPiecesDetails({
  image,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <header>
        <button type="button">←</button>
      </header>
      <div>
        <ImageContainer></ImageContainer>
        <div className="colorPicker"></div>
        <div>
          <h2>FamousArtis:</h2>
        </div>
      </div>
      <div>
        <h2>Comments:</h2>
      </div>
    </>
  );
}
