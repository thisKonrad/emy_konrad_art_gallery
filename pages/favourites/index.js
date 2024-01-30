/* :::: Favourites :::: */
import ArtPieces from "../../components/ArtPieces";


export default function Favourites({
    pieces,
    artPiecesInfo,
    onToggleFavourite,
}) {
    const favourites = pieces.filter((piece) =>
        artPiecesInfo.find(
            (artPiece) => artPiece.slug === piece.slug && artPiece.isFavourite
        )
    );


    return (
        <main>
            <p className="heading">Favourites</p>
            <ArtPieces
                pieces={favourites}
                //onArtPiecesInfo={onArtPiecesInfo}
                artPiecesInfo={artPiecesInfo}
                onToggleFavourite={onToggleFavourite}
            />
        </main>);
}