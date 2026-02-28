import React from 'react'
import "./index.css"
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const  Sidebar =()=> {
    const nav = useNavigate()
  return (
    <div className='sidebar-container'>
        <div className='sidebar-menu'>
            <div onClick={()=> nav('/')} className='item'>
                <img className='image' src={assets.home_icon} alt='home-icon'/>
                <p className='text'>Home</p>
            </div>

            <div className='item'>
                <img className='image' src={assets.search_icon} alt='search-icon'/>
                <p className='text'>Search</p>
            </div>
        </div>
        <div className='library-container'>
            <div className='library-header'>
                <div className='library-item'>
                <img className='image' src={assets.stack_icon} alt='stack-icon'/>
                <p className='text-libraray'>Your Libarry</p>

            </div>
            <div className='arow-container'>
                <img className='icon-image' src={assets.arrow_icon} alt='arrow-icon' />
                <img className='icon-image' src={assets.plus_icon} alt='plus-icon' />
        </div>
        </div>
        <div className='playlist-card'>
            <h1 className='playlist-heading'>Create your first Playlist</h1>
            <p className='description'>it's easy we will help you</p>
            <button className='playlist-btn'>Create Playlist</button>

        </div>

        <div className='podcasts-card'>
            <h1 className='playlist-heading'>Find some Podcasts to follow</h1>
            <p className='description'>we'll keep you update on new episodes</p>
            <button className='playlist-btn'>Browse Podcasts</button>

        </div>
        

        </div>
      
    </div>
  )
}

export default Sidebar
