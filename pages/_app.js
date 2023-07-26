import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout'
import { SSRProvider } from 'react-bootstrap'


function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}


export default App