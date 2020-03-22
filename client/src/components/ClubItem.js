import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: 'inline',
      },
  }));

const ClubItem = (props) => {
    const { name, country, value, image } = props.club
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItemLink href={`/club/${props.club_name}`} >
                <ListItemAvatar>
                    <Avatar
                        alt = {name}
                        src = {image}>
                    </Avatar>
                </ListItemAvatar>
                    <ListItemText 
                        primary={name} 
                        secondary={
                            <Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                   {country} 
                                </Typography>
                                {` ${value} Millionen Euro`}
                            </Fragment>
                            } />
            </ListItemLink>
        </List>
    );
}
 
export default ClubItem;