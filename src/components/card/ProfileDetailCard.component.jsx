import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  pos: {
    marginBottom: 2,
  },
});

export default function SimpleCard({userEmail,firstName,lastName,mobile}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2" style={{marginBottom:"2%"}}>
          Profile Details
        </Typography>
        <Divider style={{marginBottom:"3%"}}/>
        <Typography className={classes.pos} color="textSecondary">
          email&nbsp;:&nbsp;{userEmail}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        First&nbsp;Name&nbsp;:&nbsp;{firstName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Last&nbsp;Name&nbsp;:&nbsp;{lastName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Mobile&nbsp;Number&nbsp;:&nbsp;{mobile}
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
        style={{margin:"3%"}}
      >
        EDit
      </Button> */}
      <Button variant="outlined" color="primary"
      startIcon={<EditIcon />}>
        Primary
      </Button>
      </CardActions>
    </Card>
  );
}
