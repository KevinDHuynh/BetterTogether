import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import AppBar from './components/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
//ReactDOM.render(<App />, document.querySelector('#App'));
export default App;
