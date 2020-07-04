import React, { Component } from 'react';
import { Container, List, ListItem, IconButton, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class HabitList extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }


    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <List component="nav">
                    {items.map(({id,description,predicted_longterm_benefit,perceived_benefit,estimated_difficulty,title,type}) => (
                        <ListItem>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                    {title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    {description}
                                    </Typography>
                                
                                </CardContent>
                                <CardActions>
                                    <IconButton 
                                        aria-label = "delete" 
                                        fontSize = "small" 
                                        color = "secondary"  
                                        onClick = {this.onDeleteClick.bind(this, id)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
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

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
    )(HabitList);