// /pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Add custom meta tags, fonts, etc. */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}