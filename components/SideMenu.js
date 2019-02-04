import React from 'react'
import Link from 'next/link'

const sideMenuStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
  left: 0,
  position: 'sticky',
  padding: '16px',
  width: '250px',
  height: '100%',
  border: '1px solid #f0f0f0',
  backgroundColor: '#F3A530',
}

const h1Style = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#FFF',
}

const ulStyle = {
  listStyle: 'none',
  color: '#367ABD',
  fontSize: '24px',
  fontWeight: 'bold',
}

const SideMenu = props => (
  <div style={sideMenuStyle}>
    <h1 style={h1Style}>Koki Sato Portfolio</h1>
    <ul style={ulStyle}>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>PROFILE</a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
      `}
    </style>
  </div>
)

export default SideMenu
