import useDataFetch from '@/services/useDataFetch'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./content.module.css"
import { setVideoData } from '@/slices/videoSlice'
import { useRouter } from 'next/router'

const Contents = () => {
  const content = useSelector(state => state.menuSelected)
  const topic = content.charAt(0).toUpperCase() + content.slice(1)
  const data = useDataFetch(content)
  const videoDispatch = useDispatch()
  const router = useRouter()
  const [togglePopUp, setTogglePopUp] = useState(false)
  const [titlePopUp, setTitlePopUp] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 })


  const goToVideo = (e) => {
    videoDispatch(setVideoData(e))
    router.push("/video")
  }
  const onHover = (e, event) => {
    setTitlePopUp(e)
    setTogglePopUp(true)
    setPosition(prev => ({ ...prev, x: event.clientX, y: event.clientY }))
  }
  const onLeave = () => {
    setTogglePopUp(false)
  }

  return (
    <Box className={styles.contentWrapper}>
      {togglePopUp ? <Typography
        variant="body2"
        position='absolute'
        sx={{
          top: position.y,
          left: position.x,
          backgroundColor: '#7a7a7a',
          padding: '0rem .5rem',
          borderRadius: '.25rem' , 
          color: '#fff'
        }}
      >
        {titlePopUp}
      </Typography> : ""}
      <Typography variant='h5'
        sx={{
          padding: '1rem 1rem',
          color: '#ff0000',
          fontWeight: '600'
        }}
      >{topic} <span style={{ color: '#000' }}>Videos</span></Typography>
      <Box
        padding='1rem'
        display='grid'
        sx={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(246px,1fr))',
          gap: '1rem'
        }}
      >
        {
          data?.map((e, i) => (
            <Card
              onClick={() => goToVideo(e)}
              key={e.title}
              sx={{
                margin: { xs: 'auto' },
                width: { sm: '246px', xs: "450px" },
                height: { sm: '200px', xs: "365px" },
                cursor: 'pointer'
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  width: { sm: '246px', xs: "450px" },
                  height: { sm: '138px', xs: "252px" },
                }}
                image={e.thumbnail[1].url}
                alt={e.title}
              />
              <CardContent sx={{
                backgroundColor: 'inherit'
              }} >
                <Typography
                  variant='body2'
                  fontSize='12px'
                  color='text.secondary'
                  sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                  onMouseEnter={(event) => onHover(e.title, event)}
                  onMouseLeave={onLeave}
                >
                  {e.title}

                </Typography>
              </CardContent>
            </Card>

          ))
        }
      </Box>
    </Box>
  )
}

export default Contents