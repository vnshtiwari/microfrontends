import './styles.css';
import '../styles/HomeMainPage.css';
import '../styles/InsuranceForLife.css';
import '../styles/yourGoal.css';
import '../styles/OurPurpose.css';
import 'slick-carousel/slick/slick.css';
import '../styles/whatsHot.css';
import '../styles/Testimonial.css';
import '../styles/personalizedInsight.css';
import './home.css';
import '../styles/global.css';

import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-host-2!</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
