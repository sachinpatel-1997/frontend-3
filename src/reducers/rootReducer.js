// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
// import authReducer from './authReducer';
// import { reducer as formReducer } from 'redux-form';

// const appReducer = combineReducers({
//   routing: routerReducer,
//   auth: authReducer,
//   form: formReducer,
// });

// const rootReducer = (state, action) => {
//   // console.log("RESET_ALL_DATA action", action)
//   if (action.type === 'RESET_ALL_DATA') {
//     state = {
//       auth: state.auth,
//     };
//   }
//   return appReducer(state, action);
// };

// export default rootReducer;




import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import { userReducers } from "./reducer";
// import {images} from './imageReducer';
//  import { users } from "./user";
const appReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  form: formReducer, 
  users: userReducers,
  // images
    // users,

  
  
  
});

const rootReducer = (state, action) => {
  // console.log("RESET_ALL_DATA action", action)
  if (action.type === "RESET_ALL_DATA") {
    state = {
      auth: state.auth,
    
      
    };
  }
  return appReducer(state, action);
};

export default rootReducer;