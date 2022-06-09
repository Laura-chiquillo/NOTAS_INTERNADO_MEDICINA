import Head from "next/head";
import "../styles/style.scss";
import FullLayoutClient from "../src/layouts/FullLayoutClient";
import { ColorWrapper } from "../hooks/useColor";
import FullLayoutCoor from "../src/layouts/FullLayoutCoor";

const layouts = {
  "MenuLayout" : FullLayoutClient,
  "MenuLayoutH" : FullLayoutCoor,
}


function MyApp({ Component, pageProps }) {

  const Layout = layouts[Component.layout] || (({children}) => <>{children}</>)

  return (
    <div>
      <ColorWrapper>
        <Head>
          <title>Universidad El Bosque - Internado Notas</title>
          <meta
            name="description"
          />
           <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ColorWrapper>

    </div>
  );
}

export default MyApp;
