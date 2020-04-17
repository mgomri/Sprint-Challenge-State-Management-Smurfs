import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { getReducer }  from './reducers/reducers';
import logger from 'redux-logger';


const store = createStore(getReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
