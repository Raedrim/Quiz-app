import { useRouter } from 'next/router';
import { useEffect } from 'react';
import nookies from 'nookies';
import '@/styles/globals.css'


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const cookies = nookies.get();
    const token = cookies['your-cookie-name'];

    if (!token && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
