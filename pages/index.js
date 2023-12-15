import useSWR from "swr";
import ArtPieces from "./ArtPieces";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = 'https://example-apis.vercel.app/api/art';


export default function HomePage() {

  function FetchArtPieces() {
    const { data } = useSWR( URL, fetcher);

    console.log('data:', data)
  
    // render data
    return <div>Hello {data.name}!</div>;
  }

  
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces/>
    </div>
  );
}
