import React, { Component, Fragment} from 'react';
import {AppBar, Toolbar, Typography, Snackbar} from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal';

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

  render() {
    

    const { classes } = this.props;

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Logout />
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <RegisterModal />
        <LoginModal />
      </Fragment>
    )
    
    return (
      <div className={classes.root}>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BetterTogether
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