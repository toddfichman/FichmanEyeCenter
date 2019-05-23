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
            Fichman Eye Center | CT Eye Care | Cataract Surgery in CT
          </title>
          <meta
            name="description"
            content="Fichman Eye Center is Home of Connecticut's best eye surgery providers with a full service eye center."
          />
          <meta
            name="keywords"
            content="CT Eye surgery, Best Eye Surgery, Full service, Eye Center"
          />
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
