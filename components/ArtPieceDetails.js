import ImageContainer from "./ImageContainer";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <header></header>
      <div>
        <button type="button">←</button>
        <ImageContainer
          artist={artist}
          src={image}
          alt={title}
        ></ImageContainer>
        <div className="colorPicker"></div>
        <div>
          <h2>FamousArtis:{artist}</h2>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
        </div>
      </div>
      <div>
        <h2>Comments:</h2>
      </div>
    </>
  );
}
