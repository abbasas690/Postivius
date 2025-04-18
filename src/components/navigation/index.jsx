import React, { useState } from 'react'
import { NavLink } from 'react-router'
import Logo from "../../assets/Logo.svg"
import {Menu,X} from  "lucide-react"
function Navigation() {
  const [isMobileOpen,setIsMobileOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const closeMenu = () => {
    setIsMobileOpen(false)
  }

  return (
      <header className='flex justify-between px-1 sm:justify-around items-center'>
        {/* logo */}
        <NavLink to="/">
        <img src={Logo} className='size-18 sm:size-25 md:size-30' alt="" />
        </NavLink>
        {/* desktop menu */}
      <nav className="hidden sm:flex gap-2">
        <NavLink to="/aboutUs" end>about us</NavLink> 
        <NavLink to="/service" end>service</NavLink> 
        <NavLink to="/useCase" end>Use Case</NavLink> 
        <NavLink to="/pricing" end>Pricing</NavLink> 
        <NavLink to="/blog" end>Blog</NavLink> 
      </nav>
      {/* desktop nav CTA */}
      <button className='hidden sm:block outline-2 rounded-sm hover:bg-black hover:text-white py-1 px-2'>Request a quote</button>
      {/*mobile menu  */}
      <button className='sm:hidden z-50' onClick={toggleMenu}>
        {isMobileOpen ? <X size={32} onClick={closeMenu} /> :<Menu size={24}/>}
      </button>
      {
        isMobileOpen && (
          <div className='absolute top-0 left-0 h-full w-full bg-white shadow sm:hidden flex flex-col justify-center items-center gap-2 p-4 animate-slide-down'>
          <NavLink to="/aboutUs" end onClick={closeMenu} >About Us</NavLink>
          <NavLink to="/service" end onClick={closeMenu} >Service</NavLink>
          <NavLink to="/useCase" end onClick={closeMenu} >Use Case</NavLink>
          <NavLink to="/pricing" end onClick={closeMenu} >Pricing</NavLink>
          <NavLink to="/blog" end onClick={closeMenu} >Blog</NavLink>
          <button className="mt-2 px-4 py-2 max-w-sm border border-black rounded-sm hover:bg-black hover:text-white transition">
            Request a Quote
          </button>
          </div>
        )
      }
    </header>
  )
}

export default Navigation