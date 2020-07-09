import React, { Component } from 'react';
import {Dialog, TextField, Button, DialogTitle,DialogActions, List, ListItem} from '@material-ui/core/';
import {Alert} from '@material-ui/lab';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions';

class LoginModal extends Component{
    state = {
        dialog: false,
        username: '',
        password: '',
        msg: null
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            //login error occurs
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.error_msg});
            } else {
                this.setState({msg: null});
            }
        }
        
        if(this.state.dialog) {
            if(this.props.isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        //Clear errors
        this.props.clearErrors();
        this.setState({
            dialog: !this.state.dialog
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        
        const { username, password } = this.state;

        const user = {
            username,
            password
        }

        //attempt login
        this.props.login(user);
    };

    render() {
        return(
            <div>
                <Button onClick={this.toggle} color="inherit">
                    Login
                </Button>

                <Dialog
                aria-labelledby="new-habit-dialog"
                open={this.state.dialog}
                >
                    <DialogTitle id="new-habit-dialog">Login</DialogTitle>
                    { this.state.msg ? (
                            <Alert severity="error">{ this.state.msg }</Alert>
                        ) : null}
                    <form onSubmit={this.onSubmit}>
                        <List>
                            <ListItem>
                                <TextField label="Username" name="username" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                            <ListItem>
                                <TextField label="Password" name="password" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                        </List>
                    </form>
                    <DialogActions>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        <Button color="primary" onClick={this.onSubmit}>Login</Button>
                    </DialogActions>
                </Dialog>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,
     { login, clearErrors }
     )(LoginModal);