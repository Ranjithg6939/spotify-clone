import React from 'react'
import Navbar from '../Navbar'
import { albumsData, songsData } from '../../assets/assets'
import "./index.css"
import AlbumItems from '../AlbumItems'
import SongItems from '../SongItems'

const DisplayHome = () => {
  return (
    <div className='displayhome-container'>
      <Navbar />
      <div className='your-playlist-container'>
        <h1 className='your-playlist'>Your Top Palylist</h1>
        <div className='song-data'>
            {albumsData.map((item, index) => (
            <AlbumItems
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}

        </div>
      
      </div>

      <div className='your-playlist-container'>
        <h1 className='your-playlist'>Recently Played</h1>
        <div className='song-data'>
            {songsData.map((item, index) => (
            <SongItems
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}

        </div>
      
      </div>
    </div>
  )
}

export default DisplayHome
