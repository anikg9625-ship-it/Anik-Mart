import React from 'react'
import GroceryVideo from '../Images/Groceryvideo.mp4'

const VideoSection = () => {
  return (
    <div className="position-relative">

      <video
        src={GroceryVideo}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="w-100"
        style={{
          height: "100vh",
          objectFit: "cover"
        }}
      />

      

      </div>

    
  )
}

export default VideoSection