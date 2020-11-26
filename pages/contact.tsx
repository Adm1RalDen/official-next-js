import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import ContactPage from '@/components/contact/contact'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
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
