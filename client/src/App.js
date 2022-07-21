import AppNavbar from './components/Navbar'
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';
import CardModal from './components/CardModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <section>
          <CardModal />
          <List />
        </section>
      </div>
    </Provider>
  );
}

export default App;
