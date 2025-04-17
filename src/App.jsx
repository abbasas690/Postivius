import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import { createBrowserRouter, RouterProvider, } from "react-router";
import HomePage from "./pages/home"
import BlogPage from "./pages/blog"
import PricingPage from "./pages/pricing"
import ServicePage from "./pages/service"
import UseCasePage from "./pages/useCase"
import AboutUsPage from './pages/aboutUs'
import Layout from './components/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'useCase', element: <UseCasePage /> },
      { path: 'aboutUs', element: <AboutUsPage /> },
    ],
  },
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
