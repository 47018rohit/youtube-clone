import { Box } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const Video = () => {
    
  const data = useSelector(state => state.video)
    return (
        <Box className="videoWrapper"
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${data.videoId}`} controls={true} width={1080} height={720}/>
        </Box>
    )
}

export default Video