import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import { Provider } from 'react-redux';
import store from './store';

import AppBar from './components/AppBar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar></AppBar>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </Provider>
  );
}
//ReactDOM.render(<App />, document.querySelector('#App'));
export default App;
