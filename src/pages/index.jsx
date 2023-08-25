import { Contents, Sidebar, Navbar } from '@/components'
import './globals.css'
import { Box } from '@mui/material'

const index = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Contents />
            </Box>
        </>
    )
}

export default index