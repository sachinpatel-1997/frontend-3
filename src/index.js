// // import React from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";
// // import App from "./App";
// // import { Provider } from "react-redux";
// // import store from "./store";

// // ReactDOM.render(
// // 	<Provider store={store}>
// // 		<App />
// // 	</Provider>,
// // 	document.getElementById("root")
// // );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducers/auth';
// import jwtDecode from 'jwt-decode';
// import { setCurrentUser,setAuthorizationToken } from './actions/auth';

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   // prevent someone from manually setting a key of 'jwtToken' in localStorage
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   } catch(e) {
//     store.dispatch(setCurrentUser({}))
//   }
// }

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//   ,
//   document.getElementById('root')
// );


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './containers/App/index';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import { store } from './helpers';
import configureStore from "./store";
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
		<Suspense fallback={"Loading..."}>
		<App />
		</Suspense>
		</BrowserRouter>
		
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();