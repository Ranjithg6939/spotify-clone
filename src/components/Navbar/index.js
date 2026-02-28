import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from "react-router-dom";
import "./index.css"

const Navbar = () => {
  const nav = useNavigate()
  return (
    <div className='navbar-container'>
      <div className='top-row'>
        <div className='container'>
          <img onClick={()=>nav(-1)} className='nav-icon' src={assets.arrow_left} alt='arrow-left' />
          <img onClick={()=>nav(+1)} className='nav-icon' src={assets.arrow_right} alt='arrow-right' />
        </div>
        <div className='side-line'>
          <p className='perimium-text'>Explore Premium</p>
          <p className='install-app'>Install App</p>
          <p className='profile'>R</p>
        </div>
      </div>
      <div className='song-category'>
        <p className='song'>All</p>
        <p className='song music'>Music</p>
        <p className='song podacasts'>Podcasts</p>
      </div>

    </div>
  )
}

export default Navbar
