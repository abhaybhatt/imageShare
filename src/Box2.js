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

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from "@material-ui/core/Fab"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '45.25%', // 16:9
  },
  
 
  
}));

function Box() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Score given task"
        //subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="data:image/png;base64,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"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Click on check icon to rate the work submitted by students</strong>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <Link to='/score'>
          <Fab color="primary" aria-label="add">
             <AddIcon />
          </Fab>
        </Link>
        
        
      </CardActions>
    </Card>
  );
}

 export default Box;
