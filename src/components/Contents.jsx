import useDataFetch from '@/services/useDataFetch'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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

  const goToVideo =(e)=>{
    videoDispatch(setVideoData(e))
    router.push("/video")
  }

  return (
    <Box className={styles.contentWrapper}>
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
              onClick = {()=>goToVideo(e)}
              key={e.title}
              sx={{
                width: '246px',
                height: '200px',
                cursor: 'pointer'
              }}
            >
              <CardMedia
                component='img'
                width='246px'
                height='138px'
                image={e.thumbnail[1].url}
                alt={e.title}
              />
              <CardContent sx={{
                backgroundColor: 'inherit'
              }} >
                <Typography variant='body2' fontSize='12px' color='text.secondary'>
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