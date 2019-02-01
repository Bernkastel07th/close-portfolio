import SideMenu from './SideMenu'

const layoutStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  margin: '28px',
}

const containerStyle = {
  padding: '0 28px',
  width: '70%',
}

const Layout = props => (
  <div style={layoutStyle}>
    <SideMenu />
    <div style={containerStyle}>{props.children}</div>
  </div>
)

export default Layout
