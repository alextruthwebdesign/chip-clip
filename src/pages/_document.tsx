// TODO Review the need for this
// @ts-expect-error
import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { locale } from 'config';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// required to use ApolloClient in getStaticProps
import fetch from 'node-fetch';

global.fetch = abortableFetch(fetch).fetch;

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={locale}>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body className="antialiased font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
