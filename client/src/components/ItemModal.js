import React, { Component, Fragment} from 'react';
import {Dialog, TextField, Button, DialogTitle,DialogActions, List, ListItem, MenuItem, Slider, Typography, Fab, DialogContent} from '@material-ui/core/';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {Add} from '@material-ui/icons';
import PropTypes from 'prop-types';

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
        perceived_benefit: 1,
        estimated_difficulty:'',
        estimated_time:'',
    }
    
    types = [
        {
          value: 'Physical Health',
          label: 'Physical Health',
        },
        {
            value: 'Mental Health',
            label: 'Mental Health',
          },
        /*{
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
    */
      ];

    difficulty = [
        {
            value: 'Very Easy',
            label: 'Very Easy'
        },
        {
            value: 'Easy',
            label: 'Easy'
        },
        {
            value: 'Medium',
            label: 'Medium'
        },
        {
            value: 'Hard',
            label: 'Hard'
        },
        {
            value: 'Very Hard',
            label: 'Very Hard'
        },
    ];

    time = [
        {
          value: 'Flexible',
          label: 'Flexible',
        },
        {
            value: '1-5 Minutes',
            label: '1-5 Minutes',
        },
        {
            value: '5-20 Minutes',
            label: '5-20 Minutes',
        },
        {
            value: '20-60 Minutes',
            label: '20-60 Minutes',
        },
        {
            value: '1-2 Hours',
            label: '1-2 Hours',
        },
        {
            value: '2-5 Hours',
            label: '2-5 Hours',
        },
        {
            value: '>5 Hours',
            label: '>5 Hours',
        },
        /*
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
        */
      ];
    
    toggle = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChange = name => (e, value) => {
        this.setState({
          [name]: value // --> Important bit here: This is how you set the value of sliders
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            type: this.state.type,
            description: this.state.description,
            perceived_benefit: this.state.perceived_benefit,
            estimated_difficulty: this.state.estimated_difficulty,
            estimated_time: this.state.estimated_time
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    }


    render() {

        const { isAuthenticated } = this.props.auth;

        const showFab = (
          <Fragment>
                <Fab variant="contained" color="secondary" onClick={this.toggle} style={style}>
                    <Add />
                </Fab>
          </Fragment>
        )

        const noFab = (
            <Fragment>
            </Fragment>
          )

        return(
            <div>

                { isAuthenticated ? showFab : noFab}
                

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
                                        Perceived Longterm Benefit
                                    </Typography>
                                    <Slider
                                        name="perceived_benefit"
                                        defaultValue={1}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={1}
                                        marks
                                        min={1}
                                        max={10}
                                        color="secondary"
                                        onChange={this.handleChange("perceived_benefit")}
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

                                    <TextField color="secondary" select variant="standard" fullWidth="True" label="Average Activity Time" name="estimated_time" margin="dense" onChange={this.onChange}>
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
    item: state.item,
    auth: state.auth
})
export default connect(mapStateToProps, { addItem })(ItemModal);