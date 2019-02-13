import SideMenu from './SideMenu'
import Head from 'next/head'

const layoutStyle = {
  display: 'flex',
  padding: '16px 24px',
}

const containerStyle = {
  padding: '0 24px',
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SideMenu />
    <div style={containerStyle}>{props.children}</div>
    <style global jsx>{`
      body {
        margin: 0;
      }
    `}</style>
  </div>
)

export default Layout
