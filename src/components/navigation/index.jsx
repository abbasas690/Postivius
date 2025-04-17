import React from 'react'
import { NavLink } from 'react-router'
import Logo from "../../assets/Logo.svg"
function Navigation() {
  return (
      <header className='flex justify-between align-middle'>
        <NavLink to="/">
        <img src={Logo } className='size-18 sm:size-25' alt="" />
        </NavLink>
      <nav className="hidden sm:flex">
        <NavLink to="/aboutUs" end>about us</NavLink> 
        <NavLink to="/service" end>service</NavLink> 
        <NavLink to="/useCase" end>Use Case</NavLink> 
        <NavLink to="/pricing" end>Pricing</NavLink> 
        <NavLink to="/blog" end>Blog</NavLink> 
      </nav>
      <button className=' hidden sm:block outline-2 rounded-sm'>Request a quote</button>
    </header>
  )
}

export default Navigation