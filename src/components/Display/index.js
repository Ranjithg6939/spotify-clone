import React, { useEffect } from 'react'
import "./index.css"
import { Routes, Route, useLocation } from "react-router-dom"
import DisplayHome from '../DisplayHome'
import DisplayAlbum from '../DisplayAlbum'
import { useRef } from 'react'
import { albumsData } from '../../assets/assets'

function Display() {
  const displayref = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const  albumId = isAlbum ? location.pathname.slice(-1) : ""
  const bgColor = albumsData[Number(albumId)].bgColor

  useEffect(()=>{
    if(isAlbum){
      displayref.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
    else{
      displayref.current.style.background = "#121212"

    }
  })
  return (
    <div ref={displayref} className='display-container'>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<DisplayAlbum />}/>

        </Routes>
    </div>
  )
}

export default Display
