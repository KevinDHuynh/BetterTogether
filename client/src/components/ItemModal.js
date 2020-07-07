import React, { Component } from 'react';
import {Dialog, TextField, Button, DialogTitle,DialogActions, List, ListItem, MenuItem} from '@material-ui/core/';
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
    
    types = [
        {
          value: 'Physical',
          label: 'Physical',
        },
        {
          value: 'Sleep',
          label: 'Sleep',
        },
        {
          value: 'Creative',
          label: 'Creative',
        },
        {
          value: 'Pleasure',
          label: 'Pleasure',
        },
      ];
    
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
                                <TextField label="Name of Habit" name="title" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                            <ListItem>
                                <TextField label="Brief Description" name="description" margin="dense" onChange={this.onChange}/>
                            </ListItem>
                            <ListItem>
                                <TextField select variant="standard" fullWidth="True" label="Type of Habit" name="type" margin="dense" onChange={this.onChange}>
                                {this.types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
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