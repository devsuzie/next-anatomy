import '../styles/globals.css'
import type {AppProps} from 'next/app'

import Error from 'next/error'
import {useEffect} from 'react'

function MyApp({Component, pageProps}: AppProps) {
  if (pageProps.errorCode) {
    return (
      <Error
        statusCode={pageProps.errorCode}
        title={pageProps.errorCode + '에러가 발생했습니다'}
      />
    )
  }

  return <Component {...pageProps} />
}
export default MyApp
