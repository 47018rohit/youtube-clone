import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Contents = () => {
  const content = useSelector(state => state.menuSelected)
  const topic = content.charAt(0).toUpperCase() + content.slice(1)
  return (
    <Box>
      <Typography variant='h5'
        sx={{
          padding: '1rem 1rem',
          color: '#ff0000',
          fontWeight: '600'
        }}
      >{topic} <span style={{ color: '#000' }}>Videos</span></Typography>
    </Box>
  )
}

export default Contents