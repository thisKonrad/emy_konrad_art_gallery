import Image from "next/image";


export default function FavouriteButton({ onToggleFavourite, isFavourite, piece }) {

    return (<button className="favourite_icon" onClick={() => onToggleFavourite(piece)}>
        {!isFavourite ? (
            <Image
                className="clear_icon"
                width={25}
                height={25}
                src="Heart_Clear.svg"
                alt="clear-heart"
            ></Image>
        ) : (
            <Image
                width={25}
                height={25}
                src="Heart_Filled.svg"
                alt="filled-heart"
            ></Image>
        )}
    </button>);
}
