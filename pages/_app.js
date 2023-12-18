import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
//import { useState } from "react";
import { useImmer } from "use-immer";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";


export default function App({ Component, pageProps }) {


  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data: ", data)


  function handleToggle(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      updateArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavourite: !pieceInfo.isFavourite }
            : pieceInfo
        )
      );
    } else {
      updateArtPiecesInfo([...artPiecesInfo, { slug, isFavourite: true }]);
    }
  }
  console.log("Art Pieces Info: ", artPiecesInfo);


  return (<>
    <GlobalStyle />
    <Layout />
    <Component {...pageProps}
      onToggleFavourite={handleToggle}
      pieces={isLoading || error ? [] : data}
      artPiecesInfo={artPiecesInfo}
    />
  </>);
}
