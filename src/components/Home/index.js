import React, { useContext } from 'react'
import "./index.css"
import Sidebar from '../Sidebar'
import Player from '../Player'
import Display from '../Display'
import { PlayerContext } from '../../context/PlayerContext'

function Home() {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className="home-container">
      <div className="layout-container">
        <Sidebar />
        <Display/>
      </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default Home
