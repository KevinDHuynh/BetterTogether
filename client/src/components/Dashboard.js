import React, { Component } from 'react';
import {Dialog, Button, Typography, Container, AppBar, Toolbar, IconButton, Slide} from '@material-ui/core/';
import { CloseIcon } from '@material-ui/icons/Close';
import { createStyles, withStyles } from '@material-ui/core/styles';
import HabitList from './HabitList';
import ItemModal from './ItemModal';
import PropTypes from 'prop-types';

const useStyles = createStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

class Dashboard extends Component{
    state = {
        dialog: false,
    }

    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            dialog: !this.state.dialog
        });

    }

    render() {
        const { classes } = this.props;
        return(
            
            <div>
                <Button variant="contained" color="primary" onClick={this.toggle}>
                    Dashboard
                </Button>

                <Dialog
                fullscreen
                open={this.state.dialog}
                onClose={this.toggle}
                TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                            Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>    
                <Container>
                    <HabitList />
                    <ItemModal />
                </Container>
                </Dialog>
            </div>
            
        );
    }
}

export default (withStyles(useStyles)(Dashboard));