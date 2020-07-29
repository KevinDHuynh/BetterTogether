import React, { Component } from 'react';
import {Card, CardContent} from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = createStyles((theme) => ({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
        
      },
      pos: {
        marginBottom: 12,
      },
}));





class Introduction extends Component {
  state = {
    visible: true,
  }

  toggle = () => {
    this.setState({
        visible: !this.state.visible
    });
  }


  render() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Welcome!
                </Typography>
                <Typography variant="body2" component="p">
                Here you can record your habits and save them for future reference.
                <br />
                To record habits, please register for an account or log in.
                </Typography>
            </CardContent>
        </Card>
    );
  }
}


export default withStyles(useStyles)(Introduction);