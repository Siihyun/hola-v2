import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { setupMSW } from '../mocks';

if (process.env.NODE_ENV === 'development') {
  console.log('msw started');
  setupMSW();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
