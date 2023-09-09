import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  styled,
  alpha
} from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setToggleSidebar } from '@/slices/toggleSlice';
import { useRouter } from 'next/router';


export default function Navbar() {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(setToggleSidebar())
  }
  const router=useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ff0000' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 , display: { xs: 'none', sm: 'block' } }}
            onClick={handleToggle}
          >
            <Menu />
          </IconButton>
          <Box sx={{flex: 1, display: 'flex', justifyContent: 'space-between'}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ cursor: 'pointer' }}
              onClick={()=>{
                return router.push('/')
              }}
            >
              You-Tube
            </Typography>
            <SearchWrapper >
              <SearchIconWrapper >
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchWrapper>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));