import React, { useState } from 'react'
import { NavLink } from 'react-router'
import Logo from "../../assets/Logo.svg"
import {Menu,X} from  "lucide-react"
function Navigation() {
  const [isMobileOpen,setIsMobileOpen] = useState(false)
  const [shouldRender,setShouldRender] = useState(false)

  const toggleMenu = () => {
    setShouldRender(true)
    setIsMobileOpen(!isMobileOpen)
  }

  const closeMenu = () => {
    setIsMobileOpen(false)
    setTimeout(() => {
     setShouldRender(false) 
    }, 300);
  }

  return (
      <header className='flex justify-between px-1 sm:justify-around items-center'>
        {/* logo */}
        <NavLink to="/">
        <img src={Logo} className='size-25 sm:size-25 md:size-30' alt="" />
        </NavLink>
        {/* desktop menu */}
      <nav className="hidden sm:flex gap-2">
        <NavLink to="/aboutUs" end className={({isActive})=> isActive ? 'bg-accent px-2.5 py-1 rounded-md  font-semibold' : 'hover:text-accent px-2.5 py-1 '}>about us</NavLink> 
        <NavLink to="/service" end className={({isActive})=> isActive ? 'bg-accent px-2.5 py-1 rounded-md font-semibold' : 'hover:text-accent px-2.5 py-1 '}>service</NavLink> 
        <NavLink to="/useCase" end className={({isActive})=> isActive ? 'bg-accent px-2.5 py-1 rounded-md font-semibold' : 'hover:text-accent px-2.5 py-1 '}>Use Case</NavLink> 
        <NavLink to="/pricing" end className={({isActive})=> isActive ? 'bg-accent px-2.5 py-1 rounded-md font-semibold' : 'hover:text-accent px-2.5 py-1 '}>Pricing</NavLink> 
        <NavLink to="/blog" end className={({isActive})=> isActive ? 'bg-accent px-2.5 py-1 rounded-md font-semibold' : 'hover:text-accent px-2.5 py-1 '}>Blog</NavLink> 
      </nav>
      {/* desktop nav CTA */}
      <button className='hidden sm:block outline-2 rounded-sm hover:bg-black hover:text-white py-1 px-2'>Request a quote</button>
      {/*mobile menu  */}
      <button className='sm:hidden z-50' onClick={toggleMenu}>
        {isMobileOpen ? <X size={32} onClick={closeMenu} /> :<Menu size={24}/>}
      </button>
      {
        shouldRender && (
          <div className={`${ isMobileOpen ? 'animate-slide-down': 'animate-slide-up'} absolute top-0 left-0 h-full w-full bg-white shadow sm:hidden flex flex-col justify-center items-center gap-2 p-4`}> 
          <NavLink to="/service" end onClick={closeMenu} className={({isActive}) => isActive ? 'text-accent font-semibold': 'hover:text-accent'} >Service</NavLink>
          <NavLink to="/aboutUs" end onClick={closeMenu} className={({isActive}) => isActive ? 'text-accent font-semibold': 'hover:text-accent'} >About Us</NavLink>
          <NavLink to="/useCase" end onClick={closeMenu} className={({isActive}) => isActive ? 'text-accent font-semibold': 'hover:text-accent'} >Use Case</NavLink>
          <NavLink to="/pricing" end onClick={closeMenu} className={({isActive}) => isActive ? 'text-accent font-semibold': 'hover:text-accent'} >Pricing</NavLink>
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