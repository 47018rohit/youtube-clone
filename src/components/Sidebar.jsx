import { Box, List, ListItem, ListItemButton, ListItemIcon, SvgIcon, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import styles from './sidebar.module.css'
import { sidebarMenu } from "@/contents/contents"
import { setMenuSelected } from "@/slices/menuSelectedSlice"


const Sidebar = () => {
  const toggle = useSelector(state => state.toggleSidebar)
  const dispatch = useDispatch()
  const selected = useSelector(state=> state.menuSelected)
  const handleSelected = (e) => {
    dispatch(setMenuSelected(e.name))
  }

  return (
    <Box className={`${toggle ? styles.show : styles.hidden} ${styles.sidebar}`} >
      {
        sidebarMenu?.map((e) => (
          <List key={e.name}
            onClick={() => { handleSelected(e) }}
            className={`${selected === e.name ? styles.selected : ''}`}
          >
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon >
                  <SvgIcon component={e.icon} sx={{ color: '#eee' }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    display: `${toggle ? '' : 'none'}`,
                    fontSize: '12px ',
                    color: '#eee'
                  }}>
                  {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        ))
      }
    </Box>
  )
}

export default Sidebar