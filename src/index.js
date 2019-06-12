import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Editform from './components/Editform'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux';
import {allReducer} from './reducers/index'
import thunk  from'redux-thunk'
 

const initialstate = {};
const middleware = [thunk];
const store  = createStore( 
                            allReducer,
                            initialstate,
                            compose(
                              applyMiddleware(...middleware),
                              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                          )
)
         

const routing = (
  <Provider store ={store}>
  <Router>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/edit-products" component={Editform} />
  </Switch>
  </Router>
  </Provider>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
