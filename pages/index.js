/* import useSWR from "swr"; */
import ArtPieces from "./ArtPieces";
import Spotlight from "./Spotlight";

/* const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art"; */

export default function FetchArtPieces({pieces}) {
  
/*   const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("data:", data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>; */

  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];

  console.log("random ", randomPicture);

  return (
    <div>
      <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.title}
      />
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
