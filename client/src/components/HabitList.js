import React, { Component } from 'react';
import { Container, List, ListItem, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {v1 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class HabitList extends Component{

    componentDidMount(){
        this.props.getItems();
    }
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <Button variant="contained" color="primary" onClick={() => {
                    const name = prompt('Enter item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name}]
                        }));
                    }
                }}>
                    Add Habit
                </Button>

                <List component="nav">
                    {items.map(({id, name}) => (
                        <ListItem>
                            <IconButton aria-label="delete" fontSize="small" color="secondary" onClick={() => {
                                this.setState(state => ({
                                    items: state.items.filter(item => item.id != id)
                                }));
                                
                            }}>
                                <DeleteIcon />
                            </IconButton>
                            {name}
                        </ListItem>
                    ))}
                </List>
                
            </Container>
        );
    }

}

HabitList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(HabitList);