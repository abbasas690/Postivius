import React from 'react'
import HeroSection from './heroSection';
import LogosTiles from '../../components/logosTile';
import Services from './Services';
function HomePage() {
  return (
    <>
    <HeroSection />
    <LogosTiles />
    <Services />
    </>
  )
}

export default HomePage;