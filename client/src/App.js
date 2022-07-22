import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import { Provider } from 'react-redux';
import List from './components/List';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <List/>
        </div>
      </Provider>
    );
  }
}

export default App;
