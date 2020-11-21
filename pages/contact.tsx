import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import ContactPage from '@/components/contact-page/contact-page'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Layout className="Contact">
        <LayoutContainer>
          <ContactPage />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Contact
