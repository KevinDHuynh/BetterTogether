import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import { Provider } from 'react-redux';
import store from './store';

import HabitList from './components/HabitList';

import AppBar from './components/AppBar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar />
        <HabitList />
      </div>
    </Provider>
  );
}
//ReactDOM.render(<App />, document.querySelector('#App'));
export default App;
