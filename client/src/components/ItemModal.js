import React, { Component } from 'react';
import {Dialog, TextField, Button, DialogTitle,DialogActions, List, ListItem, MenuItem, Slider, Typography, Fab, DialogContent} from '@material-ui/core/';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {Add} from '@material-ui/icons';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

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
          value: 'PHYSICAL',
          label: 'Physical',
        },
        {
          value: 'SLEEP',
          label: 'Sleep',
        },
        {
          value: 'CREATIVE',
          label: 'Creative',
        },
        {
          value: 'PLEASURE',
          label: 'Pleasure',
        },
      ];

    difficulty = [
        {
            value: 'VERY_EASY',
            label: 'Very Easy'
        },
        {
            value: 'EASY',
            label: 'Easy'
        },
        {
            value: 'MEDIUM',
            label: 'Medium'
        },
        {
            value: 'HARD',
            label: 'Hard'
        },
        {
            value: 'VERY_HARD',
            label: 'Very Hard'
        },
    ];

    time = [
        {
          value: 'LESS_THAN_A_WEEK',
          label: '<1 Week',
        },
        {
            value: 'ONE_WEEK',
            label: '1 Week',
        },
        {
            value: 'TWO_WEEKS',
            label: '2 Weeks',
        },
        {
            value: 'THREE_WEEKS',
            label: '3 Weeks',
        },
        {
            value: 'ONE_MONTH',
            label: '1 Month',
        },
        {
            value: 'EIGHT_WEEKS',
            label: '2 Months',
        },
        {
            value: 'TWELVE_WEEKS',
            label: '3 Months',
        },
        {
            value: 'TWENTYONE_WEEKS',
            label: '6 Months',
        },
        {
            value: 'ONE_YEAR',
            label: '1 Year',
        },
        {
            value: 'TWO_YEARS',
            label: '2 Years',
        },
        {
            value: 'FIVE_YEARS',
            label: '5 Years',
        },
        {
            value: 'TEN_YEARS',
            label: '10 Years',
        },
        {
            value: 'GREATER_THAN_TEN_YEARS',
            label: '>10 Years',
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
                <Fab variant="contained" color="secondary" onClick={this.toggle} style={style}>
                    <Add />
                </Fab>

                <Dialog
                aria-labelledby="new-habit-dialog"
                open={this.state.dialog}
                >
                    <DialogTitle id="new-habit-dialog">Create New Habit</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.onSubmit}>
                            <List>
                                <ListItem>
                                    <TextField color="secondary" label="Name of Habit" name="title" margin="dense" onChange={this.onChange}/>
                                </ListItem>
                                <ListItem>
                                    <TextField color="secondary" label="Brief Description" name="description" margin="dense" onChange={this.onChange}/>
                                </ListItem>
                                <ListItem>
                                    <TextField select color="secondary" variant="standard" fullWidth="True" label="Type of Habit" name="type" margin="dense" onChange={this.onChange}>
                                    {this.types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </ListItem>
                                <ListItem>
                                    {/* Predicted Longterm Benefit*/}
                                    <Typography id="discrete-slider" color="black" gutterBottom>
                                        Predicted Longterm Benefit
                                    </Typography>
                                    <Slider
                                        name="predicted_longterm_benefit"
                                        defaultValue={5}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={1}
                                        marks
                                        min={1}
                                        max={10}
                                        color="secondary"
                                    />
                                </ListItem>
                                <ListItem>

                                    {/* Estimated Difficulty*/}

                                    <TextField color="secondary" select variant="standard" fullWidth="True" label="Estimated Difficulty" name="estimated_difficulty" margin="dense" onChange={this.onChange}>
                                    {this.difficulty.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>

                                </ListItem>
                                <ListItem>
                                    {/* Estimated Time */}

                                    <TextField color="secondary" select variant="standard" fullWidth="True" label="Estimated Time" name="estimated_time" margin="dense" onChange={this.onChange}>
                                    {this.time.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </ListItem>
                            </List>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" variant="contained" onClick={this.toggle}>Cancel</Button>
                        <Button type="submit" color="secondary" variant="contained" onClick={this.onSubmit}>Add Item</Button>
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