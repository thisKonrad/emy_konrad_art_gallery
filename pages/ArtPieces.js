import ArtPiecePreview from "./ArtPiecePreview"


export default function ArtPieces({pieces}){


    return(<ul>
        {pieces && pieces.map((piece)=>
        <li key={piece.slug}>
        <ArtPiecePreview 
        title={piece.name} 
        image={piece.imageSource} 
        artist={piece.artist}/>
        </li>)}
    </ul>)
}