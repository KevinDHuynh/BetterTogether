import React, { Component } from 'react';
import {Dialog, TextField, Button, DialogTitle} from '@material-ui/core/';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { v4 as uuid } from 'uuid';
import { ADD_ITEM } from '../actions/types';

class ItemModal extends Component{
    state = {
        dialog: false,
        name: ''
    }
    
    toggle = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }



    render() {
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.toggle}>
                    Add Habit
                </Button>

                <Dialog
                aria-labelledby="new-habit-dialog"
                open={this.state.dialog}
                >
                <DialogTitle id="new-habit-dialog">Create New Habit</DialogTitle>
                <form onSubmit={this.onSubmit}>
                    <TextField label="name" name="name" id="item" onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>Add Item</Button>
                </form>
                </Dialog>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, { addItem })(ItemModal);