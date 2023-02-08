import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Title from './Title';

export default function ListChart() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         <strong>Top-Products</strong>
        </ListSubheader>}
    >
      {[0, 1, 2].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        const val=value;
        return (
          <ListItem
            key={value}
            disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense> 
            
              <ListItemIcon>
              <h6>{val+1}</h6>
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <Title>{(val + 1) * Math.random().toFixed() * 7}k</Title>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}