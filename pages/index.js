import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'
import Head from 'next/head'

const linksMd = `
## Links
  - twitter: https://twitter.com/hi_im_Corki
  - github: https://github.com/Bernkastel07th
  - codepen: https://codepen.io/Bernkastel07th/
  - 当ポートフォリオサイトのソースコード: https://github.com/Bernkastel07th/portfolio
`

export default () => (
  <div>
    <Head>
      <title>portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Markdown source={linksMd} />
    </Layout>
  </div>
)
