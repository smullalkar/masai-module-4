import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import SchoolIcon from '@material-ui/icons/School';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#b71c1c'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#d32f2f',
    color: 'white',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  appbarLink: {
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Marks Recorder
          </Typography>
        </Toolbar>
      </AppBar>
      <Hidden only={['xs', 'sm']}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link to='/' className={classes.appbarLink}>
                <ListItem button>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                  >Home</ListItemText>
                </ListItem>
              </Link>
              <Link to='/allstudents' className={classes.appbarLink}>
                <ListItem button>
                  <ListItemIcon>{<SupervisorAccountIcon />}</ListItemIcon>
                  <ListItemText>All Student's Marks</ListItemText>
                </ListItem>
              </Link>
              <Link to='/addstudent' className={classes.appbarLink}>
                <ListItem button>
                  <ListItemIcon>{<PersonAddIcon />}</ListItemIcon>
                  <ListItemText>Add Student Marks</ListItemText>
                </ListItem>
              </Link>
              <Link to='/about' className={classes.appbarLink}>
                <ListItem button>
                  <ListItemIcon>{<InfoIcon />}</ListItemIcon>
                  <ListItemText>About</ListItemText>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              {['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{<SchoolIcon />}</ListItemIcon>
                  <Link to={`/class${index + 1}`} className={classes.appbarLink}>
                    <ListItemText primary={text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}