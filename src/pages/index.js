import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="StaticImage test"
        src="https://www.it-akademeia.jp/wp-content/uploads/2020/11/Snapshot_1.png"
      />
    </Layout>
  )
}

export default IndexPage
