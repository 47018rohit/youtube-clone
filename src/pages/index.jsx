import { Contents, Sidebar } from '@/components'
import './globals.css'
import { Box } from '@mui/material'

const index = () => {
    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Contents />
            </Box>
        </>
    )
}

export default index