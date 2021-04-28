//import logo from './logo.svg';
import React , { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import Main from './components/Maincomponent';
import {ConfigureStore} from './redux/configureStore';
const store = ConfigureStore();

class App extends Component  {


render() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
  );
}
}
export default App;
