import React from "react";
import Box from '@mui/material/Box';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PeopleIcon from '@mui/icons-material/People';
import styled from "styled-components"

export const Box = styled.div`
bottom: 0; 
position: fixed; 
width: 100%;
`
export default function Footer () { 
    return (
      <footer>
        <Box sx={{ width: 500 }}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={< HomeIcon />} />
        <BottomNavigationAction label="Compras" icon={< ShoppingCartCheckoutIcon />} />
        <BottomNavigationAction label="Ferfil" icon={< PeopleIcon />} />
      </BottomNavigation>
    </Box>
        </Box>
       </footer>
      
  );
}
    
       



