// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/custom.css"
import "../css/prism.css"
import 'react-toastify/dist/ReactToastify.css';
import { StateContext } from '../context/StateContext';


function MyApp({ Component, pageProps }) {
  return <StateContext>
     <Component {...pageProps} />
  </StateContext>
}

export default MyApp
