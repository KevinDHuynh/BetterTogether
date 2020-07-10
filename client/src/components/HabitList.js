import React, { Component } from 'react';
import { Container, IconButton, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class HabitList extends Component{
    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
            this.props.getItems();
        }
    }

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
                <Grid container direction="row" spacing={2} style={{marginTop: '1em'}}>
                    {items.map(({ _id,description,predicted_longterm_benefit,perceived_benefit,estimated_difficulty,title,type}) => (
                        <Grid item>
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
                                        onClick = {this.onDeleteClick.bind(this, _id)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
        );
    }

}

HabitList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
    )(HabitList);