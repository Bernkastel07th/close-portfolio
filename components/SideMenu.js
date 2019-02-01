import React from 'react'
import Link from 'next/link'

const sideMenu = {
  width: '30%',
  height: '100%',
  border: '1px solid #f0f0f0',
}

const SideMenu = props => (
  <div style={sideMenu}>
    <ul>
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
  </div>
)

export default SideMenu
