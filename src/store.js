// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;


import { createStore, applyMiddleware, compose } from "redux";
import persistState from "redux-localstorage";
import rootReducer from "reducers/rootReducer";
import thunk from "redux-thunk";

const initialState = {};
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 100,
    })) ||
  compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), persistState("auth"))
  );
  return store;
}