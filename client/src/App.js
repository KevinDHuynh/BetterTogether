import React, {useEffect, Fragment} from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { Container , ThemeProvider, CssBaseline} from '@material-ui/core/';

import HabitList from './components/HabitList';
import ItemModal from './components/ItemModal';
import AppNavBar from './components/AppNavBar';
import theme from './theme';

import './App.css';

const dashboard = (
  <Fragment>
    <HabitList />
    <ItemModal />
  </Fragment>
)

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className="App">
          <AppNavBar />
          <Container>
			<HabitList />
			<ItemModal />
          </Container>
        </div>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
