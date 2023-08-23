import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import styles from './sidebar.module.css'
import { sidebarMenu } from "@/contents/contents"
import { useState } from "react"
import { setMenuSelected } from "@/slices/menuSelectedSlice"


const Sidebar = () => {
  const toggle = useSelector(state => state.toggleSidebar)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('home')
  const handleSelected = (e) => {
    setSelected(e.name)
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
                <ListItemIcon color="#eee">
                  <SvgIcon component={e.icon}  />
                </ListItemIcon>
                <ListItemText
                  
                  primary={e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                  sx={{
                    display: `${toggle ? '' : 'none'}`
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        ))
      }
    </Box>
  )
}

export default Sidebar