import ArtPieces from "../../components/ArtPieces";


export default function OverviewPage({pieces}){

    return (<div>
        <h1>Art Gallery</h1>
        <ArtPieces pieces={pieces} />
        </div>)
}