import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultvalue: [] }
  );

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
      setArtPiecesInfo([...artPiecesInfo, { slug, comments: [newComment] }]);
    }
  }
  console.log("comments", artPiecesInfo);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data: ", data);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : data}
        addComment={addComment}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
