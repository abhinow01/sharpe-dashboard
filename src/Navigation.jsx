import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function Navigation (){
return (
   <div>
    <Box sx={ {flexGrow: 1}} >
    <AppBar position="static" style={{
            backgroundColor:'whitesmoke'
        }}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'black'}}>
            Sharpe
          </Typography>
          <Button style={{color:"black"}} variant = "text" href="/">Home</Button>
        <Button style={{color:"black"}} variant = "text" href="/form">Form</Button>
        <br/>
        <Button style={{color:"black"}} variant = "text" href="/posts">Posts</Button>
        
            </Toolbar>

        </AppBar>
    </Box>
   </div>
)
}
export default Navigation;