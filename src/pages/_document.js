import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Move your stylesheets from next/head to here */}
        <link rel="stylesheet" href="/static/styles/{name}.css" />
        <link href="/static/styles/{name}.css" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    
  );
}
