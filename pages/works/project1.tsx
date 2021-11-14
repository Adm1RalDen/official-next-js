import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import Project1 from '@/components/works/project1/project1'

const Project1Page = () => {
  return (
    <>
      <Head>
        <title>Project 1 Page</title>
      </Head>
      <Layout>
        <LayoutContainer>
          <Project1 />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Project1Page
