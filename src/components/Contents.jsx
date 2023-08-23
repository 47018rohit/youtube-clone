import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Contents = () => {
  const content = useSelector(state=> state.menuSelected)
  const topic = content.charAt(0).toUpperCase() + content.slice(1)
   return (
    <Box>
      <Typography >{topic} <span>Videos</span></Typography>
    </Box>
  )
}

export default Contents