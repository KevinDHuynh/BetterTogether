import React, { Component, Fragment} from 'react';
import {AppBar, Toolbar, Typography, Link} from '@material-ui/core';
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

  onSubmit = e => {
    e.preventDefault();
}

  render() {
    

    const { classes } = this.props;

    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Typography variant="h5" className={classes.menuButton}>
          <Logout />
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
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link href="http://bettertogether.host/" color="inherit">
                BetterTogether
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