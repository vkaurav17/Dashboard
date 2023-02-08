import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';

export default function DateList() {
  return (
    <List sx={{ width: '100%', maxWidth: 300, bgcolor: ''}}>
      <ListItem>
      <Avatar sx={{textAlign:'center',borderRadius:'0px',color:'darkred',backgroundColor:'whitesmoke'}}>
      <ListItemText primary="12" secondary="sep" />
          </Avatar>
          <Grid sx={{paddingLeft:'50px'}}><ListItemText secondary="Respond to need volunteer activity" />
      </Grid>
      </ListItem>
     
      <ListItem>
      <Avatar sx={{textAlign:'center',borderRadius:'0px',color:'darkred',backgroundColor:'whitesmoke'}}>
      <ListItemText primary="11" secondary="sep" />
          </Avatar>
          <Grid sx={{paddingLeft:'50px'}}><ListItemText secondary="Everyone realise would be desirable" />
      </Grid>
      </ListItem>
      <ListItem>
      <Avatar sx={{textAlign:'center',borderRadius:'0px',color:'darkred',backgroundColor:'whitesmoke'}}>
      <ListItemText primary="10" secondary="sep" />
          </Avatar>
          <Grid sx={{paddingLeft:'50px'}}><ListItemText secondary="Join the group Boardmanship forum" />
      </Grid>
      </ListItem>
    </List>
  );
}
