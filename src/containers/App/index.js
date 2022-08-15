import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import Navbar from "../../components/layout/Navbar";
import Landing from "../../components/layout/Landing";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
 import { loadUser } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
 import PrivateRoute from "../../utils/privateRoute";
 import NotFound from "../../components/NotFound";
 import Dashboard from "../../components/Dashboard";
 import Create from "../../components/Create";
 import { interceptor } from "../../utils/interceptor";
 import Update from "../../components/Update";
 import editUser from "../../components/editUser";
import './App.css'
import UpdateUser from "components/UpdateUser";
function App() {
	
  const dispatch = useDispatch();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const refreshToken = {
    refreshToken: localStorage.getItem(`refreshToken`),
  };

  useEffect(() => {
       isLoggedIn && dispatch(loadUser(refreshToken));
  }, []);
  interceptor();
	return (
		<>
			<div className="App">
				<Router>
				 <Navbar />
					<Switch>
						 <Route exact path="/" component={Landing} /> 
						 <PrivateRoute path="/create" exact component={Create} />
						 <PrivateRoute  path="/dashboard" exact component={Dashboard}/>
						 <PrivateRoute path="/update/:id" exact component={Update} />
						 <PrivateRoute path="/updateUser/" exact component={UpdateUser} />
						 <PrivateRoute path="/editUser/:id" exact component={editUser} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						 <Route exact path="" component={NotFound} /> 
						


					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;