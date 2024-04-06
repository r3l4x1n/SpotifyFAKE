import React from 'react'
import stylesD from './Header.module.css'

export default function Header() {
  return (
    <div>
      <h1 className={stylesD.container__header}>This is a development for a free version of Spotify</h1>
    </div>
  )
}
