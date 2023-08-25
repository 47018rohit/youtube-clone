import { Box } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const Video = () => {
    
  const data = useSelector(state => state.video)
    return (
        <Box className="videoWrapper">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${data.videoId}`} controls={true}/>
        </Box>
    )
}

export default Video