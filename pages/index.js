import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'

const markdown = `
# Koki Sato Portfolio
### Links
  - github: https://github.com/Bernkastel07th
  - codepen: https://codepen.io/Bernkastel07th/
  - 当ポートフォリオサイトのソースコード: https://github.com/Bernkastel07th/portfolio
`

export default () => (
  <Layout>
    <Markdown source={markdown} />
  </Layout>
)
