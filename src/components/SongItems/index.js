import React, { useContext } from 'react'
import "./index.css"
import { PlayerContext } from '../../context/PlayerContext'

const SongItems = (props) => {
  const {playWithId} = useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(props.id)} className='song-item-container'>
        <img className='song-image' src={props.image} alt="" />
        <p className='song-name'>{props.name}</p>
        <p className='song-desc'>{props.desc}</p>
      
    </div>
  )
}

export default SongItems
