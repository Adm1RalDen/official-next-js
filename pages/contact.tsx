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
      <Layout className="Contact" headerIsFixed={true} headerColor="white">
        <LayoutContainer>
          <ContactPage />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Contact
