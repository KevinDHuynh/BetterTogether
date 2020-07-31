import React, { Component } from 'react';
import { Container, IconButton, Card, CardContent, Typography, Grid, CardHeader} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const useStyles = createStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));


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
        const { classes } = this.props;
        const { items } = this.props.item;
        
        return (
            
            <Container>
                <Grid container direction="row" spacing={2} style={{marginTop: '1em'}}>
                    {items.map(({ _id,description,estimated_time,estimated_difficulty,perceived_benefit,title,type}) => (
                        <Grid item>
                            <Card>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="more" aria-controls="icon-menu" onClick = {this.onDeleteClick.bind(this, _id)}> 
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                    title={title}
                                    subheader={type}
                                >
                                </CardHeader>
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        {description}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Activity Time: {estimated_time}
                                        <br />
                                        Difficulty: {estimated_difficulty}
                                        <br />
                                        Predicted Benefit: {perceived_benefit}/10
                                    </Typography>
                                </CardContent>
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
    )(withStyles(useStyles)(HabitList));