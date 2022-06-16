import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'

export default function Header() {
    const {nom} = useSelector(state => state.user.userData)
  return (
    <div className='header'>
      <h1>Linedata</h1>
      <p> Hello {nom} </p>
    </div>
  )
}
