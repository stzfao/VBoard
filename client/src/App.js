import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import { Provider } from 'react-redux';
import List from './components/List';
import store from './store';
import './App.css';
import { Container } from 'reactstrap';
import CardModal from './components/CardModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <CardModal />
            <List />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
