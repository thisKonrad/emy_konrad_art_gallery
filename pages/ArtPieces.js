
export default function ArtPieces({pieces}){


    return(<ul>
        {pieces.map((piece)=><li key={id}>{piece}</li>)}
    </ul>)
}