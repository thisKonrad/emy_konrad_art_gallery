import useSWR from "swr";
import ArtPieces from "./ArtPieces";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = 'https://example-apis.vercel.app/api/art';


export default  function FetchArtPieces() {

    const { data,error,isLoading } = useSWR( URL, fetcher);

    console.log('data:', data)
  
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data}/>
    </div>
  );
}
