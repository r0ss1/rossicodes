import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {

    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-gotham dark:bg-transparent bg-gradient-to-b from-rose-500 to-fuchsia-500 text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument