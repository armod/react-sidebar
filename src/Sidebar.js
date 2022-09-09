import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { icons } from 'react-icons/lib'
import { social, links } from './data'

export const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src='' className='logo' alt='coding' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}> {icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
