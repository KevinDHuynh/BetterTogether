import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types'

export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <div>
                <Fragment>
                    <Button onClick={this.props.logout} href="#" color="inherit" style={{margin: '2em'}} >
                        Logout
                    </Button>
                </Fragment>
            </div>
        )
    }
}

export default connect(null, { logout })(Logout);