import React from 'react'
import amazonLogo from '../../assets/amazon.png'
import dribbleLogo from '../../assets/dribble.png'
import hubspotLogo from '../../assets/hubsopt.png'
import netflixLogo from '../../assets/netflix.png'
import zoomLogo from '../../assets/zoom.png'

function LogosTiles() {
  return (
      <div className=" max-w-9/10 mx-auto flex my-8">
        <div className="flex w-full flex-row justify-between gap-4">
          <img src={amazonLogo} alt="Amazon" className="h-12 w-12 grayscale" />
          <img src={dribbleLogo} alt="Dribble" className="h-12 w-12 grayscale" />
          <img src={hubspotLogo} alt="Hubspot" className="h-12 w-12 grayscale" />
          <img src={netflixLogo} alt="Netflix" className="h-12 w-12 grayscale" />
          <img src={zoomLogo} alt="Zoom" className="h-12 w-12 grayscale" />
        </div>
        </div>

  )
}

export default LogosTiles