import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import Project from '@/components/works/project/project'
import { ProjectData } from './project1-data'

const Project1Page = () => {
  return (
    <>
      <Head>
        <title>Luklabs</title>
      </Head>
      <Layout>
        <LayoutContainer>
          <Project {...ProjectData} />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Project1Page
