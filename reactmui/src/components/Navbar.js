import React from 'react'
import {AppBar,styled,Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
text-decoration:none;
color:white;
`

const Navbar = () => {
  return (
    <div>
     <AppBar position="static">
     <Toolbar>
        
            <Tabs to="/" >Home</Tabs>
            <Tabs to="/about" >About</Tabs>
            <Tabs to="/add" >AddUser</Tabs>
            <Tabs to="/All" >AllUser</Tabs>
                    
     </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
