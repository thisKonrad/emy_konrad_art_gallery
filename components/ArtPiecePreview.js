import ImageContainer from "./ImageContainer.js";


export default function ArtPiecePreview( { title, image, artist } ) {

    return(<div className="art_piece_wrap">
        <ImageContainer 
        src={image}
        alt={title}
        artist={artist}
        />
        </div>)
}