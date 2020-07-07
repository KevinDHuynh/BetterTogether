import React, {useEffect} from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions'

import { Container } from '@material-ui/core/'

import HabitList from './components/HabitList';
import ItemModal from './components/ItemModal';

import AppNavBar from './components/AppNavBar';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <HabitList />
          <ItemModal />
        </Container>
      </div>
    </Provider>
  );
};
//ReactDOM.render(<App />, document.querySelector('#App'));
export default App;
