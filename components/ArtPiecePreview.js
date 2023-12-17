import ImageContainer from "./ImageContainer.js";


export default function ArtPiecePreview( { title, image, artist } ) {

    return(<>
        <ImageContainer 
        src={image}
        alt={title}
        artist={artist}
        />
        </>)
}