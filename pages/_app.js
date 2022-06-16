import '../styles/globals.css'
import Layout from '../components/layout'
import { SWRConfig } from 'swr';
import fetcher from '../lib/fetcher';

function MyApp({ Component, pageProps }) {
  
  return (
    <SWRConfig value={{ fetcher }}>
    <Layout>
      <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
