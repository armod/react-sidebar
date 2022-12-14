import React from 'react'
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaUserNinja,
  FaCalendarAlt,
} from 'react-icons/fa'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaHome />,
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
    icon: <FaUserNinja />,
  },
]

export const social = [
  {
    id: 1,
    url: 'www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: 'www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'www.twitter.com',
    icon: <FaBehance />,
  },
]
