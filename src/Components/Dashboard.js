import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import CurveChart from "./CurveChart";
import CircleChart from "./CircleChart";
import ListChart from "./ListChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import Tile from "./Tile";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SemiChart from "./SemiChart";
import DateList from "./DateList";

import FlagIcon from '@mui/icons-material/Flag';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Dashboard';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            > 
              <MenuIcon />
             
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <SearchIcon/>
            <FlagIcon/>
            <GridViewOutlinedIcon/>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <>
          <Box
            sx={{
              width: "70%",
              margin: "1rem",
              marginTop: "5rem",
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                marginBottom: "1rem",
              }}
            >
              <Grid item xs>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <Tile
                    title="Revenue"
                    value="$21,000"
                    results="+2.65%"
                    icon={<CurrencyExchangeIcon sx={{ fontSize: 60 }} />}
                    chipType="success"
                  />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Tile
                    title="Orders"
                    value="5,643"
                    results="-0.82%"
                    icon={<AssignmentIcon sx={{ fontSize: 60 }} />}
                    chipType="error"
                  />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <Tile
                    title="Customers"
                    value="45,254"
                    results="-1.04%"
                    icon={<PeopleIcon sx={{ fontSize: 60 }} />}
                    chipType="error"
                  />
                </Paper>
              </Grid>
            </Grid>

            <Grid container >
              <Grid item xs>
             
              <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                    width:"100%",
                    
                  
                  }}
                >  
               
                  <Chart />
                </Paper>
               
              </Grid></Grid>
              <Grid container spacing={3} sx={{paddingTop:'42px'}}>
              {/* Recent Orders */}
              <Grid item xs>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                  }}
                >
                  <CurveChart />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                    paddingLeft:'4rem'
                  }}
                >
                  <CircleChart/>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                  }}
                >
                  <ListChart />
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              width: "30%",
              marginRight: "1rem",
              marginTop: "5rem",
            }}
         className="ProfileBox"
         >
              <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "3rem",
                  }}
                >
            <Grid container>
              <Grid item xs>
              
                  <Card sx={{ maxWidth: "auto", height: 260 }}>
                    <CardMedia
                      sx={{
                        m: 1,
                        border: 1,
                        width: "5rem",
                        height: "5rem",
                        borderRadius: "50%",
                        marginLeft: "14rem",
                      }}
                      image={require("../images/pics1.jpg")} // require image
                      
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Jennifer Bennett
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Product Designer
                      </Typography>

                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-evenly" }}>
                      <Grid item xs sx={{ paddingLeft: "5rem" }}>
                        <Tile title="Products" value="2184" />
                      </Grid>
                      <Grid item xs sx={{ paddingLeft: "5rem" }}>
                        <Tile value="25.7k" title="Followers" />
                      </Grid>
                    </CardActions>

                  </Card>
                
              </Grid>
            </Grid>

            <Grid container sx={{paddingTop:'2rem',paddingLeft:'5rem'}}>
            <Grid item xs={2}>
                  <SemiChart/>
                  <Grid sx={{width:"100%",justifyContent:"center",display:"flex",paddingLeft:"6rem"}}><Tile
                    title="Earning this month"
                    value="$26,256"
                    results="+2.65%"
                    chipType="success"
                  /> <Tile/><Typography sx={{ display:"flex", paddingLeft:"7rem",paddingTop:"6rem"}}>
                  From previous period
                </Typography></Grid>
                  
                </Grid>
            </Grid>
            <Divider sx={{paddingTop:"2rem"}}/>

            <Grid container sx={{paddingTop:'2rem',paddingLeft:"3rem",justifyContent:"center"}}>
            <Grid item xs>
               
                  <Typography variant="h6" color="text.secondary">
                    Recent Activity
                      </Typography>
                  <DateList/>
                
                </Grid>
            </Grid>

            </Paper>
          </Box>
        </>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
