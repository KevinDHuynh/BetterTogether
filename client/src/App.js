import React, {useEffect, Fragment} from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { Container , ThemeProvider, CssBaseline} from '@material-ui/core/';

import Cover from './components/Cover';
import Benefits from './components/Benefits';
import TheLens from './components/TheLens';
import Experience from './components/Experience';
import Foundation from './components/Foundation';

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
            <Cover />
            <Benefits />
            <TheLens />
            <Experience />
            <Foundation />
          </Container>
        </div>
      </ThemeProvider>
    </Provider>
  );
};
//ReactDOM.render(<App />, document.querySelector('#App'));
export default App;
