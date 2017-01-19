import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import createLogger from 'redux-logger';
//import { rootReducer } from './reducers/index_reducer.js'
import reducer  from './reducers/toggle-reducer';

/* Components */
import Butt from './components/button';
import UserOnline from './components/user';


/* Create a logger */
const logger = createLogger();
const initialState = {
  user: "Guest",
  login_status: "logged-out"
};


/* Creating Redux Store */
const store = createStore(reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

let unsubscribe = store.subscribe(() =>
  ReactDOM.render((
    <App store={store}/>
  ), document.getElementById('app'))
)

/* Root App Definition */
const App = (props)=>(

  <div>
    <h1>Just a header</h1>
    <Butt store={ props.store } />
    <UserOnline store={ props.store } />
  </div>
)

ReactDOM.render((
  <App store={store}/>
), document.getElementById('app'))
