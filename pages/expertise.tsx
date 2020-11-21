import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import ExpertisePage from '@/components/expertise/expertise'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expertise</title>
      </Head>
      <Layout className="Expertise">
        <LayoutContainer>
          <ExpertisePage />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Contact
