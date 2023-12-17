import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";


export default function App({ Component, pageProps }) {

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data: ",data)

  return (<>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps}
      pieces={isLoading || error ? [] : data} />
    </>);
}
