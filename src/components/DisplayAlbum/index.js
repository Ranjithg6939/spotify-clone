import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../../assets/assets'
import "./index.css"
import { PlayerContext } from '../../context/PlayerContext'

const DisplayAlbum = () => {

  const { id } = useParams()
  const albumDataLocal = albumsData[id]
  const { playWithId } = useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className="album-details">
        <img
          className="alb-image"
          src={albumDataLocal.image}
          alt="album"
        />

        <div className="album-playlist">
          <p className="playlist-text">Playlist</p>
          <h1 className="albumdata-name">
            {albumDataLocal.name}
          </h1>
          <h4 className='albumdata-desc'>
            {albumDataLocal.desc}
          </h4>
          <p className="albumdata-text">
            <img
              className="spotify-img"
              src={assets.spotify_logo}
              alt="spotify"
            />
            <b>Spotify Clone</b> 77,54,328 likes |
            <b> 50 songs </b> | about 2hr 35 min
          </p>

        </div>
      </div>
        <div className='songs-list'>
        <span className='number-list'>#</span>
        <span className='title-col'>Title</span>
        <span className='album'>Album</span>
        <span className='date'>Date Added</span>
        <img className='clock-icon' src={assets.clock_icon} alt='clock'/>
      </div>

      {songsData.map((item,index) => (
        <div onClick={() =>playWithId(item.id)} key={index} className='song-data-list'>
          <span className='song-number'>{index + 1}</span>

          <div className='song-title-col'>
            <img className='item-image' src={item.image} alt={item.name}/>
            <span className='song-title'>{item.name}</span>
          </div>

          <span className='song-album'>{albumDataLocal.name}</span>
          <span className='date'>3 days ago</span>
          <span className='duration'>{item.duration}</span>
          
        </div>
      ))}

    </>
  )
}

export default DisplayAlbum
