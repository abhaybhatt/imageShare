import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from "@material-ui/core/Fab"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Box() {
  //const history = useHistory(); 
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Create a task"
        //subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image='https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png'        
        title="task image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Click on + icon to create a task for your students</strong>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <Link to='/createtask'>
        <Fab  color="primary" aria-label="add">
           <AddIcon />
        </Fab>
        </Link>
        
        
      </CardActions>
    </Card>
  );
}

 export default Box;
