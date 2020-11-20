import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import Main from '@/components/main/main'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
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
