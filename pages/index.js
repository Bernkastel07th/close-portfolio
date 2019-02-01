import React from 'react'
import Mdx, { meta } from '../posts/post.mdx'

const { layout } = meta

export default () => (
  <layout>
    <Mdx />
  </layout>
)
