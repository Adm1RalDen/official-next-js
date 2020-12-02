import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import { AboutPage } from '@/components/about/about-page'

const About = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Layout>
        <LayoutContainer>
          <AboutPage />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default About
