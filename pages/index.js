import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'

const linksMd = `
## Links
  - github: https://github.com/Bernkastel07th
  - codepen: https://codepen.io/Bernkastel07th/
  - codesandbox: https://codesandbox.io/u/Bernkastel07th
`

export default () => (
  <Layout>
    <Markdown source={linksMd} />
  </Layout>
)
