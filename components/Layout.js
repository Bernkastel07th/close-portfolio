import Head from 'next/head'

const containerStyle = {
  padding: '16px 32px 56px',
  'overflow-y': 'scroll',
}

const Layout = props => (
  <div>
    <Head>
      <title>portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div style={containerStyle}>{props.children}</div>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Layout
