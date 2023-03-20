import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
