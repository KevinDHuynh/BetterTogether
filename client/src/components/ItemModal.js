import React, { Component } from 'react';
import {Dialog, TextField, Button, DialogTitle,DialogActions, List, ListItem} from '@material-ui/core/';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component{
    state = {
        dialog: false,
        title: '',
        type:'',
        description: '',
        predicted_longterm_benefit:'',
        estimated_difficulty:'',
        estimated_time:'',
    }
    
    toggle = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    }
    onChange = e => {
        this.setState({ [e.target.label]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            type: this.state.type,
            description: this.state.description,
            predicted_longterm_benefit: this.state.predicted_longterm_benefit,
            estimated_difficulty: this.state.estimated_difficulty,
            estimated_time: this.state.estimated_time
        }

        this.props.addItem(newItem);

        this.toggle();
    }



    render() {
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.toggle} style={{margin: '2em'}} >
                    Add Habit
                </Button>

                <Dialog
                aria-labelledby="new-habit-dialog"
                open={this.state.dialog}
                >
                    <DialogTitle id="new-habit-dialog">Create New Habit</DialogTitle>
                    <form onSubmit={this.onSubmit}>
                        <List>
                            <ListItem>
                                <TextField label="title" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                            <ListItem>
                                <TextField label="description" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                            <ListItem>
                                <TextField label="type" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                        </List>
                    </form>
                    <DialogActions>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        <Button color="primary" onClick={this.onSubmit}>Add Item</Button>
                    </DialogActions>
                </Dialog>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, { addItem })(ItemModal);