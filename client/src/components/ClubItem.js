import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const ClubItem = (props) => {
    const { name, country, value, image } = props.club
    const classes = useStyles();

    return (
        <List dense className={classes.root}>
            <NavLink to={`/club/${props.club_number}`} style={{ textDecoration: 'none' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt = {name}
                                src = {image}>
                            </Avatar>
                        </ListItemAvatar>
                    <ListItemText 
                        primary={name} 
                        secondary={`${country} ${value} Millionen Euro`} />
                    </ListItem>
            </NavLink>
        </List>
    );
}
 
export default ClubItem;