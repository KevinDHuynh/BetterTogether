import React, { Component, Fragment} from 'react';
import {AppBar, Toolbar, Typography, Link} from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal';
import Dashboard from './Dashboard';


const useStyles = createStyles((theme) => ({
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




class AppNavBar extends Component {

  state = {
    isOpen: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  }

  onSubmit = e => {
    e.preventDefault();
}

  render() {
    

    const { classes } = this.props;

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Typography variant="h5" className={classes.menuButton}>
          <Logout />
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <Dashboard />
        </Typography>
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <Typography variant="h5" className={classes.menuButton}>
          <RegisterModal />
        </Typography>
        <Typography variant="h5" className={classes.menuButton}>
          <LoginModal />
        </Typography>
      </Fragment>
    )
    
    return (
      <div className={classes.root}>
      <AppBar position="fixed" style={{ margin: 0 }}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link href="#cover" color="inherit" onClick={this.onSubmit}>
                BetterTogether
              </Link>
            </Typography>
            
            <Typography variant="h5" className={classes.menuButton}>
              <Link href="#benefits" color="inherit" onClick={this.onSubmit}>
                Benefits
              </Link>
            </Typography>  
            <Typography variant="h5" className={classes.menuButton}>
              <Link href="#theLens" color="inherit" onClick={this.onSubmit}>
                The Lens
              </Link>
            </Typography>
            <Typography variant="h5" className={classes.menuButton}>
              <Link href="#experience" color="inherit" onClick={this.onSubmit}>
                Experience
              </Link>
            </Typography>
            <Typography variant="h5" className={classes.menuButton}>
              <Link href="#foundation" color="inherit" onClick={this.onSubmit}>
                Foundation
              </Link>
            </Typography>
            { isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(withStyles(useStyles)(AppNavBar));