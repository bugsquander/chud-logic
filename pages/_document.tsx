import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-black">
        <Head />
        <body className="loading text-white w=full h-full m-0 bg-gradient-to-t from-[rgba(13,12,12,1)] via-[rgba(25,25,25,0.9)] to-[rgba(13,12,12,1)]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
