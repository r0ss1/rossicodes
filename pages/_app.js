import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import { SWRConfig } from 'swr';
import fetcher from '../lib/fetcher';
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider attribute="class">
    <SWRConfig value={{ fetcher }}>
          <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>rossicodes</title>
        </Head>
    <Layout>
      <Component {...pageProps} />
      </Layout>
      </SWRConfig>
      </ThemeProvider>
  )
}

export default MyApp
