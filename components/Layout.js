import SideMenu from './SideMenu'
import Head from 'next/head'

const layoutStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  margin: '28px',
}

const containerStyle = {
  padding: '0 28px',
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SideMenu />
    <div style={containerStyle}>{props.children}</div>
  </div>
)

export default Layout
