import '../../styles/globals.css'
import { RouteGuard } from '../../lib/routeGuard'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <RouteGuard content={pageProps.content} >
      <Component {...pageProps} />
      <div id="modal-root"></div>
    </RouteGuard>
    </>
    )
}

export default MyApp
