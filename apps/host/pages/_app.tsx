import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import './styles.css';
import { useState } from 'react';
import './styles.css';
import '../styles/HomeMainPage.css'
import "../styles/InsuranceForLife.css"
import '../styles/yourGoal.css'
import '../styles/OurPurpose.css'
import 'slick-carousel/slick/slick.css'
import '../styles/whatsHot.css'
import "../styles/Testimonial.css";
import "../styles/personalizedInsight.css"
import "./home.css";



function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Welcome to next-host-2!</title>
      </Head>
      <main className="app">
        <Component  {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
