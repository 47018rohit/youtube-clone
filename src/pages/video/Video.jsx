import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { useSelector } from 'react-redux'
import styles from './video.module.css'

const Video = () => {
    const [frameSize, setFrameSize] = useState({ width: 1080, height: 720 })
    const data = useSelector(state => state.video)

    const handleReady =(e)=>{
        console.log(e.target.getVideoEmbedCode())
    }

    return (
        <Box className={styles.videoWrapper} >
            <section className='video'>
                <YouTube
                    opts={{
                        width: frameSize.width,
                        height: frameSize.height
                    }}
                    
                    videoId={data.videoId}
                    title={data.title}
                    onReady={handleReady}
                />
                {frameSize.width > 0 && frameSize.height > 0 && (
                    <p>
                        Video Frame Dimensions: {frameSize.width}x{frameSize.height}
                    </p>
                )}
                <Typography sx={{ fontSize: '25px', fontWeight: '600', marginTop: '1.5rem' }}>
                    {data.title}
                </Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                    {data.channelTitle}
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '200' }}>
                    {data.description}
                </Typography>
            </section>
            <section className={styles.suggestedVideos}>

            </section>
        </Box>
    )
}

export default Video