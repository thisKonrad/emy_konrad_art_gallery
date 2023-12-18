import Image from "next/image";


export default function FavouriteButton({ piece, onToggleFavourite, artPiecesInfo }) {

    //console.log("art Piece Info:", artPiecesInfo.isFavourite)

    return (<button className="favourite_icon" onClick={() => onToggleFavourite(piece.slug)}>
        {artPiecesInfo.find((item) => item.slug === piece.slug)?.isFavourite
            ? (<Image
                width={25}
                height={25}
                src="Heart_Filled.svg"
                alt="filled-heart"
            ></Image>
            ) : (<Image
                className="clear_icon"
                width={25}
                height={25}
                src="Heart_Clear.svg"
                alt="clear-heart"
            ></Image>
            )}
    </button>);
}
