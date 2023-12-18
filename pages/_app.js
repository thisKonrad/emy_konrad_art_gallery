import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
//import { useState } from "react";
import { useImmer } from "use-immer";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";


export default function App({ Component, pageProps }) {

  /*   const [artPiecesInfo, setArtPiecesInfo] = useState([]);
    const [isFavourite, setFavourites] = useState(false); */

  const [artPiecesInfo, setArtPiecesInfo] = useImmer([]);
  const [isFavourite, setFavourites] = useImmer(false);

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data: ", data)


  function handleToggle(piece) {

    console.log("PIECE::SLUG", piece.slug)
    setArtPiecesInfo([...artPiecesInfo, piece.name])
    console.log("Art Pieces Info: ", artPiecesInfo)
    setFavourites(piece === !isFavourite ? piece = isFavourite : piece = !isFavourite);
    console.log("favourite:", isFavourite)


  }

  return (<>
    <GlobalStyle />
    <Layout />
    <Component {...pageProps}
      isFavourite={isFavourite}
      onToggleFavourite={handleToggle}
      pieces={isLoading || error ? [] : data}
    />
  </>);
}
