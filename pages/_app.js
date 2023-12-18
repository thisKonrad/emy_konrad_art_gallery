import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
//import { useState } from "react";
import { useImmer } from "use-immer";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {

  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);
  
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultvalue: [] }
  );

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


  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    console.log("art piece", artPiece);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavourite: false ,comments: [newComment] }]);
    }
  }


  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : data}
        onToggleFavourite
        addComment={addComment}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
