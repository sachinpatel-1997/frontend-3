// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import PrivateRoute from "./routing/PrivateRoute";
// import NotFound from "./components/NotFound";
// import Dashboard from "./components/Dashboard";
// // import setAuthToken from "./utils/setAuthToken";
// // import store from "./store";
// // import { loadUser } from "./actions/auth";
// // if (localStorage.token) {
// // 	setAuthToken(localStorage.token);
// // }

// function App() {
// 	return (
// 		<>
// 			<div className="App">
// 				<Router>
// 					<Navbar />
// 					<Switch>
// 						<Route exact path="/" component={Landing} />
// 						<PrivateRoute exact path="/dashboard" component={Dashboard} />
// 						<Route exact path="/register" component={Register} />
// 						<Route exact path="/login" component={Login} />
// 						<Route exact path="" component={NotFound} />
						
// 					</Switch>
// 				</Router>
// 			</div>
// 		</>
// 	);
// }
// export default App;



// // import React, { Component } from 'react';
// // import { Route, BrowserRouter, Switch} from 'react-router-dom'
// // import Login from './Login'
// // import Signup from './Signup'

// // import Login from "./components/auth/Login";
// // import Register from "./components/auth/Register";

// // // import Welcome from './Welcome'
// //  import PrivateRoute from "./routing/PrivateRoute";
// //  import Dashboard from "./components/Dashboard";
// //  import Navbar from "./components/layout/Navbar";
// // //    import Landing from "./components/layout/Landing";
// // export default class App extends Component {
// //   render() {
// //     return(
// //         <BrowserRouter>
// //           <div>
// //             <Switch>
// // 			<Route exact path="/" component={Navbar} />
// //               <Route path='/login' component={Login} />
// //               <Route path='/signup' component={Register} />
// // 			  <PrivateRoute exact path="/dashboard" component={Dashboard} />
			 
// //               {/* <Route path='/welcome' component={Welcome} /> */}
// //               <Route render={() => <h3>No Match</h3>} />
// //             </Switch>
// //           </div>
// //         </BrowserRouter>)
// //   }
// // }


// // import React, { Component } from 'react';
// // import { connect} from 'react-redux';
// // import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
// //  import Login from "./components/auth/Login";
// //  import Register from "./components/auth/Register";
// //  import Dashboard from "./components/Dashboard";
// //  import Navbar from "./components/layout/Navbar";
// //  import PropTypes from "prop-types";
// // import requireAuth from 'components/requireAuth';
 
// // function PrivateRoute ({ component: Component, isAuthenticated, ...rest }) {
// //   return (
// //     <Route
// //       {...rest}
// //       render={(props) => isAuthenticated === true
// //         ? <Component {...props} />
// //         : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />}
// //     />
// //   )
// // }
// // PrivateRoute.propTypes = {

// // 	component: PropTypes.func.isRequired,
// // 	// isAuthenticated: PropTypes.func.isRequired,
// // 	location: PropTypes.shape({
// // 		pathname: PropTypes.string.isRequired,
// // 	  }),
// // 	  isAuthenticated: PropTypes.shape({
// // 		pathname: PropTypes.bool.isRequired,
// // 	  }),
// // };
// // // for login/signup
// // function PublicRoute ({component: Component, isAuthenticated, ...rest}) {
// //   return (
// //     <Route
// //       {...rest}
// //       render={(props) => isAuthenticated === false
// //         ? <Component {...props} />
// //         : <Redirect to='/dashboard' />}
// //     />
// //   )
// // }
// // PublicRoute.propTypes = {
// // 	// auth: PropTypes.object.isRequired,
// // 	component: PropTypes.func.isRequired,
// // 	isAuthenticated: PropTypes.bool.isRequired,
// // 	// location: PropTypes.object.isRequired
// // };
// // class App extends Component {
// //   render(){
// //     return(
// //         <BrowserRouter>
// //           <div>
// //             <Navbar/>
// //             <Switch>
// //                 <PublicRoute isAuthenticated={this.props.isAuthenticated} path='/login' component={Login} />
// //                 <PublicRoute isAuthenticated={this.props.isAuthenticated} path='/register' component={Register} />
// //                 <PrivateRoute isAuthenticated={this.props.isAuthenticated} path='/dashboard' component={requireAuth(Dashboard)} />
// //                 <Route render={() => <h3>Not Found 404</h3>} />
// //             </Switch>
// //           </div>
// //         </BrowserRouter>)
// //   }
// // }
// // PublicRoute.propTypes = {
// // 	// auth: PropTypes.object.isRequired,
// // 	component: PropTypes.object.isRequired,
// // };
// // App.propTypes = {
// // 	// auth: PropTypes.object.isRequired,
// // 	// component: PropTypes.object.isRequired,
// // 	isAuthenticated: PropTypes.bool.isRequired,
// // 	// location: PropTypes.object.isRequired
// // };
// // function mapStateToProps(state){
// //     return {
// //         isAuthenticated: state.isAuthenticated
// //     }
// // }

// // export default connect(mapStateToProps)(App)






// import React, { Component } from 'react';
// import { Router, Route } from 'react-router-dom';

// import {Login} from './components/auth/Login';
// import { Register } from './components/auth/Register';
// import {Home} from './components/Home/Home';

//  import { history } from './helpers/history';
// // import { PrivateRoute } from './components/PrivateRoute'
// import { connect } from 'react-redux';
// // import { alertActions } from './actions';
// import './App.css';
// // import PropTypes from "prop-types";
// class App extends Component {
//   constructor(props) {
//     super(props);

//     history.listen((location, action) => {
//         // clear alert on location change
//         // this.props.clearAlerts();
//     });
//   }

//   render() {
//     // const { alert } = this.props;
//     return (
//       <div>
//          {/* {alert.message &&
//             <div className={`alert ${alert.type}`}>{alert.message}</div>
//           } */}
		  
//         <Router history={history}>
//             <div>
				
//             <Route exact path="/dashboard" component={Home} />
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//             </div>
//         </Router>
//       </div>
//     );
//   }
// }
// // App.propTypes = {
// // 	clearAlerts: PropTypes.object.isRequired,
// // 	alert: PropTypes.object.isRequired,
// // 	//  	isAuthenticated: PropTypes.bool.isRequired,
// // 	//  location: PropTypes.object.isRequired
// // 	 };

// // function mapState(state) {
// //   const { alert } = state;
// //   return { alert };
// // }

// // const actionCreators = {
// //   clearAlerts: alertActions.clear
// // };

// const connectedApp = connect()(App);
// export { connectedApp as App };
// // export default App;



import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
 import { loadUser } from "./actions/authActions";
//   import { signIn } from "./actions/authActions";
import { useDispatch, useSelector } from "react-redux";
 import PrivateRoute from "./routing/PrivateRoute";
 import NotFound from "./components/NotFound";
 import Dashboard from "./components/Dashboard";
 import { interceptor } from "./utils/interceptor";


// import Listing from "components/Listing";

// import Read from "./pages/Read";
// import Create from "./pages/Create";
// import Update from "./pages/Update";

// import setAuthToken from "./utils/setAuthToken";
// import store from "./store";
// import { loadUser } from "./actions/auth";

// if (localStorage.token) {
// 	setAuthToken(localStorage.token);
// }

function App() {
	
  const dispatch = useDispatch();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const refreshToken = {
    refreshToken: localStorage.getItem(`refreshToken`),
  };

  useEffect(() => {
       isLoggedIn && dispatch(loadUser(refreshToken));
	//  isLoggedIn && dispatch(signIn);
  }, []);
  interceptor();
	return (
		<>
			<div className="App">
				<Router>
				 <Navbar />
					<Switch>
						 <Route exact path="/" component={Landing} /> 
						 
						 <PrivateRoute exact path="/dashboard" component={Dashboard}/>
             {/* <PrivateRoute exact path="/dashboard/listing" component={Listing} /> */}
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						 <Route exact path="" component={NotFound} /> 


						 
						 {/* <Route exact path={["/", "/defaultPath"]} component={UserListing} /> */}
						 {/* <Route path="/" exact component={Read} />
        <Route path="/create" exact component={Create} />
        <Route path="/update/:id" exact component={Update} /> */}
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;