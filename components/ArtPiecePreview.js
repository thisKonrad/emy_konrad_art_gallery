import ImageContainer from "./ImageContainer.js";

export default function ArtPiecePreview( { title, image, artist } ) {

    return(<>
        <div className ="name">
            {title}
        </div>
        <div className="artist">
            {artist}
        </div>
        <ImageContainer 
        src={image}
        alt={title}
        />
        </>)
}