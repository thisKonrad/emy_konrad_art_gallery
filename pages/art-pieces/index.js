import ArtPieces from "../../components/ArtPieces";


export default function OverviewPage({pieces}){

    return (<div className="overview">
        <h1 className="heading">Art Gallery</h1>
        <ArtPieces pieces={pieces} />
        </div>)
}
