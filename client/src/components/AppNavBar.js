import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSort } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppNavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {props.backButton ? 
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <NavLink to="/">
                <FontAwesomeIcon icon={faArrowLeft} color="white" />
              </NavLink>
            </IconButton>
             : null}
          <Typography variant="h6" className={classes.title}>
            {props.caption}
          </Typography>
          {props.filter ? 
              <IconButton onClick={props.clickHandler}>
                <FontAwesomeIcon icon={faSort} color="white" />
              </IconButton>
              : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}