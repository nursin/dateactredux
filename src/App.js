//dependencies
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

//components
import Main from './components/MainComponent';

//app styles
import './App.css';

const store = ConfigureStore();

class App extends Component {

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
