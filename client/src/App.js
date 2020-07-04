import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container} from '@material-ui/core/';

import { Provider } from 'react-redux';
import store from './store';

import HabitList from './components/HabitList';
import ItemModal from './components/ItemModal';

import AppBar from './components/AppBar';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar />
        <Container>
          <ItemModal />
          <HabitList />
        </Container>
      </div>
    </Provider>
  );
}
//ReactDOM.render(<App />, document.querySelector('#App'));
export default App;
