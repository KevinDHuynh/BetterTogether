import React, { Component } from 'react';
import {Dialog, TextField, Button, DialogTitle,DialogActions, List, ListItem} from '@material-ui/core/';
import {Alert} from '@material-ui/lab';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component{
    state = {
        dialog: false,
        name: '',
        username: '',
        password: '',
        msg: null
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            //register error occurs
            if(error.id === 'REGISTER_FAIL') {
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
        const { name, username, password } = this.state;

        // User object
        const newUser = {
            name,
            username,
            password
        };

        this.props.register(newUser);

    };

    render() {
        return(
            <div>
                <Button variant="contained" onClick={this.toggle} color="secondary">
                    Register
                </Button>

                <Dialog
                aria-labelledby="new-habit-dialog"
                open={this.state.dialog}
                >
                    <DialogTitle id="new-habit-dialog">Create New Account</DialogTitle>
                    { this.state.msg ? (
                            <Alert severity="error">{ this.state.msg }</Alert>
                        ) : null}
                    <form onSubmit={this.onSubmit}>
                        <List>
                            <ListItem>
                                <TextField label="Full Name" name="name" margin="dense" onChange={this.onChange}/>
                            </ListItem>
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
                        <Button color="primary" onClick={this.onSubmit}>Register</Button>
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
     { register, clearErrors }
     )(RegisterModal);