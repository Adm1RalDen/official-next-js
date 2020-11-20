import { AppProps } from 'next/app'
import { NextPage } from 'next'

import '../styles/index.scss'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
 