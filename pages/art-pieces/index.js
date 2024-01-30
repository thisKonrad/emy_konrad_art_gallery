/* :::: OVERVIEW PAGE :::: */
import ArtPieces from "../../components/ArtPieces";



export default function OverviewPage({ pieces, onToggleFavourite, artPiecesInfo }) {

    return (<main>
        <p className="heading">Art Gallery</p>
        <ArtPieces
            pieces={pieces}
            artPiecesInfo={artPiecesInfo}
            onToggleFavourite={onToggleFavourite} />
    </main>)
}
