import { ArrowBack, Menu, Search } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: '#ddd',
          justifyContent: 'center'          
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            You-tube
          </Typography>
          <section id={styles.searchWrapper} >
            <section className={styles.searchIconWrapper}>
              <Search />
            </section>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
          </section>
        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default Navbar