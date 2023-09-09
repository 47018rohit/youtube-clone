// import './globals.css'
import { Navbar, Sidebar } from '@/components'
import { Box } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 const metadata = {
  title: 'You-tube',
  description: 'Youtube clone',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        {children}
      </Box>
    </>
  )
}
