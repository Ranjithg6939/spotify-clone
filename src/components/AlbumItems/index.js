import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'

const AlbumItems = (props) => {
  const nav =useNavigate()
  return (
    <div onClick={()=> nav(`/album/${props.id}`)} className='album-container'>
      <img className='album-image' src={props.image} alt="album-image" />
      <p className='album-name'>{props.name}</p>
      <p className='album-desc'>{props.desc}</p>
    </div>
  )
}

export default AlbumItems
