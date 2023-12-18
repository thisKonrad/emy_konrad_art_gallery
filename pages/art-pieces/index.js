import ArtPieces from "../../components/ArtPieces";


export default function OverviewPage({ pieces, isFavourite, onToggleFavourite }) {

    return (<div className="overview">
        <h1 className="heading">Art Gallery</h1>
        <ArtPieces pieces={pieces} isFavourite={isFavourite} onToggleFavourite={onToggleFavourite} />
    </div>)
}
