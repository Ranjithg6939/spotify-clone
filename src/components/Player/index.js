import React, { useContext } from 'react'
import "./index.css"
import { assets } from '../../assets/assets'
import { PlayerContext } from '../../context/PlayerContext'

const  Player = () => {
  const {seekBar,seekBg,play,pause,playStatus,track,time,after,before,seekBgLine} = useContext(PlayerContext)
  return (
    <div className='player-container'>
        <div className='player-left'>
        <img className='songs-data' src={track.image} alt='song-data'/>
        <div className='current-song'>
            <p className='songs-name'>{track.name}</p>
            <p className='songs-desc'>{track.desc.slice(0,16) + "...."}</p>
        </div>
        </div>
      <div className='bottom-bar'>
      <div className="music-player">
        <div className="player">
          <img className="player-icon" src={assets.shuffle_icon} alt="shuffle-icon" />
          <img onClick={before} className="player-icon" src={assets.prev_icon} alt="prev-icon" />
          {
          playStatus ? 
          (<img onClick={pause}
             className="player-icon"
            src={assets.pause_icon} 
            alt="pasue-icon pasuse" /> ) :
          ( <img onClick={play} 
            className="player-icon play"
            src={assets.play_icon}
            alt="play-icon" />)
          }
          
          <img onClick={after} className="player-icon" src={assets.next_icon} alt="next-icon" />
          <img className="player-icon" src={assets.loop_icon} alt="loop-icon" />
        </div>
        <div  className='time-line-bar'>
          <p className='duration'>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
          <div onClick={seekBgLine} ref={seekBg} className='play-area'>
            <hr ref={seekBar}  className='line'></hr>
          </div>
          <p className='duration'>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
        </div>
      </div>
      </div>
      <div className='right-controls'>
        <img className='right-icon' src={assets.play_icon} alt='play-icon'/>
        <img className='right-icon' src={assets.mic_icon} alt='mic-icon'/>
        <img className='right-icon' src={assets.queue_icon} alt='queue-icon'/>
        <img className='right-icon' src={assets.speaker_icon} alt='speker-icon'/>
        <img className='right-icon' src={assets.volume_icon} alt='volue-icon'/>
        <div className='volue-bar'></div>
        <img className='right-icon' src={assets.mini_player_icon} alt='minipayer-icon'/>
        <img className='right-icon' src={assets.zoom_icon} alt='zoom-icon'/>

      </div>
</div>

    

  )
}

export default Player
