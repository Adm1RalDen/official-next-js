import { AppProps } from 'next/app'
import { NextPage } from 'next'

import '../styles/index.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
