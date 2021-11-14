import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import Main from '@/components/main/main'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Light Impulse</title>
        <meta
          name="Description"
          content="We are an software and web development studio with office in Kiev, Ukraine. We believe that web represents great opportunity to grow for every industry right now. We make complex solutions for websites, portals, applications, as well as integration with products from leading global brands.We are an software and web development studio with office in Kiev, Ukraine. We believe that web represents great opportunity to grow for every industry right now. We make complex solutions for websites, portals, applications, as well as integration with products from leading global brands."
        />
      </Head>
      <Layout>
        <LayoutContainer>
          <Main />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Index
