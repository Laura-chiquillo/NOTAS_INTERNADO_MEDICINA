import Head from "next/head";
import "../styles/style.scss";
import FullLayoutClient from "../src/layouts/FullLayoutClient";

const layouts = {
  "MenuLayout" : FullLayoutClient
}


function MyApp({ Component, pageProps }) {

  const Layout = layouts[Component.layout] || (({children}) => <>{children}</>)

  return (
    <>
      <Head>
        <title>Monster Free Next Js Dashboard Template</title>
        <meta
          name="description"
          content="Monster Free Next Js Dashboard Template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  );
}

export default MyApp;
