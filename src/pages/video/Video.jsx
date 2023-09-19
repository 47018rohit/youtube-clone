import { Box } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const Video = () => {

    const data = useSelector(state => state.video)
    return (
        <Box className="videoWrapper" sx={{
            width: '100%',
            backgroundColor: '#aaa',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <section>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${data.videoId}`} playing={true} controls={true} width={1080} height={720} />
            </section>
        </Box>
    )
}

export default Video