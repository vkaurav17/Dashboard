import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Title from './Title';
import Chip from '@mui/material/Chip';
import './Tile.css';

function Tile(props) {
  return (

    <Grid container spacing={2} className="TileGridContainer">
        <Grid item className='TilesIcon'>
        {props.icon}
        </Grid>
        <Grid item className='TilesTitleGrid'>
         <Typography variant="string" className='TilesTitle'>
          {props.title}
            </Typography>
            <Title>{props.value}</Title>
        </Grid>
        <Grid item className='Gridchip'>
        <Chip color={props.chipType} label={props.results} size="small" className='chip'/>
        </Grid>
    </Grid>
    
  );
}

export default Tile;