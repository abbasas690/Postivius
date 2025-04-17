import Navigation from '../navigation'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout