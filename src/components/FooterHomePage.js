import React from "react";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { goToCartPage,goToProfilePage,goToHomePage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

export default function FooterHomePage (){ 
    const [value, setValue] = useState();
    const navigate = useNavigate()
    return (
    <footer style={{width: '100vw', overflow:'auto'}}>
       <Box> 
        <BottomNavigation
        
        value={value}
        color='primary'
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction onClick={() => goToHomePage(navigate)} icon={<HomeIcon />} />
        <BottomNavigationAction onClick={() => goToCartPage(navigate)}  icon={<ShoppingCartIcon />} />
        <BottomNavigationAction onClick={() => goToProfilePage(navigate)} icon={<PersonIcon />} />
      </BottomNavigation>
      </Box>
    </footer>
       
);
}
    
       



