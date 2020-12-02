import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '@/components/layout/layout'
import LayoutContainer from '@/components/layout/layout-container'
import WorkComponent from 'components/work/work'

const WorkPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <Layout className="Work-page" headerIsFixed>
        <LayoutContainer>
          <WorkComponent />
        </LayoutContainer>
      </Layout>
    </>
  )
}

export default WorkPage
