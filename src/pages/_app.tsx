import { Provider } from 'urql';
import { client, ssrCache } from '../lib/urql';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  /*
  / Validate if a query was made in Server side
  / and if it's valid to be reused in the client.
  */
 
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
