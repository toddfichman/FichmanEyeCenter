import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { PageTransition } from "next-page-transitions";

import "../styles/style.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Head>
          <title>
            Fichman Eye Center | CT Eye Care 
          </title>
          <meta
            name="description"
            content="Fichman Eye Center is Home to Connecticut's Best Eye Surgery Providers With A Full Service Eye Center."
          />
          <meta
            name="keywords"
            content="CT eye doctor, Connecticut eye doctor, glaucoma, eyeglasses,cataracts,glasses, contacts,cataract surgery, sunglasses, CT Eye surgery, Best Eye Surgery, Full service, Eye Center, lasik"
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Fichman Eye Center | CT Eye Care" />
          <meta property="og:description" content="Fichman Eye Center is Home to Connecticut's Best Eye Surgery Providers With A Full Service Eye Center."/>
          <meta property="og:site_name" content="Fichman Eye Center" />
        </Head>
        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 500ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 500ms;
          }
        `}</style>
      </Container>
    );
  }
}
