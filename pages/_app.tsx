import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '../features/Footer/Footer';
import Header from '../features/Header/Header';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
  when: 'afterChildren',
};

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <motion.div
      transition={spring}
      key={router.pathname}
      initial={{ y: isFirstRender.current ? 0 : 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Header />

      <Component {...pageProps} key={router.pathname} />

      <Footer />
    </motion.div>
  );
}

export default MyApp;
