import '../styles/globals.css';
import '../styles/App.css';
import '../styles/dashStyle.css';
import Sidebar from '../component/Sidebar';

function MyApp({ Component, pageProps }) {
  return <>
    <div className='App'>
      <Sidebar/>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
