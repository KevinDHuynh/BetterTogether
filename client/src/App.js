import React, {useEffect} from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { Container , ThemeProvider, CssBaseline} from '@material-ui/core/';

import HabitList from './components/HabitList';
import ItemModal from './components/ItemModal';
import AppNavBar from './components/AppNavBar';
import Introduction from './components/Introduction';

import theme from './theme';

import './App.css';

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
            <Introduction />
          </Container>
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
