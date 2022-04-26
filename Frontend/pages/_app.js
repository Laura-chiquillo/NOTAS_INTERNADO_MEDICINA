<<<<<<< HEAD
import FullLayoutClient from "../src/layouts/FullLayoutClient";
import Head from "next/head"
=======
import Head from "next/head";
>>>>>>> Farid
import "../styles/style.scss";

const layouts = {
  'ClientLayout' : FullLayoutClient,
  // 'AdminLayout' : En caso de que quieran un layout diferente
}

function MyApp({ Component, pageProps }) {

  const Layout = layouts[Component.layout] || (({children}) => <>{children}</>)
  if (Component.layout != undefined) {


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
<<<<<<< HEAD

      <Layout>
        <Component {...props}/>
      </Layout>
=======
      <Component {...pageProps} />
>>>>>>> Farid
    </>
  );
}

export default MyApp;
