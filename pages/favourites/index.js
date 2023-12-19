import ArtPieces from "../../components/ArtPieces";

export default function Favourites({
    pieces,
    artPiecesInfo,
    //onArtPiecesInfo,
    onToggleFavourite,
}) {
    const favourites = pieces.filter((piece) =>
        artPiecesInfo.find(
            (artPiece) => artPiece.slug === piece.slug && artPiece.isFavourite
        )
    );

    return (
        <ArtPieces
            pieces={favourites}
            //onArtPiecesInfo={onArtPiecesInfo}
            artPiecesInfo={artPiecesInfo}
            onToggleFavourite={onToggleFavourite}
        />
    );
}