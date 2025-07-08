import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <FastfoodIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nutrition Label Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;