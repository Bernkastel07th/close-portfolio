const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
    }
  },
}
