import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'

export default function Sidebar() {
    const {nom} = useSelector(state => state.user.userData)
  return (
    <div className='sidebar'>
        <ul>
            <li> <a href='#'>Home</a> </li>
            <li> <a href='#'>About</a> </li>
            <li> <a href='#'>Conact</a> </li>
            <li> <a href='#'>Blog</a> </li>
            <li> <a href='#'>Hello {nom}</a> </li>
        </ul>

      
    </div>
  )
}
