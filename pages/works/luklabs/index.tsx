import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import Project from '@/components/works/project/project'
import { ProjectData } from '@/data/luklabs'

const Project1Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luklabs</title>
      </Head>
      <Layout className="Work-page" headerIsFixed>
        <LayoutContainer>
          <Project {...ProjectData} />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default Project1Page
