import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../../actions/authActions";
import { DropdownButton } from "react-bootstrap";
 import { MenuItem } from "@mui/material";
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbars from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar = ({ auth: { isLoggedIn, loading, user }, logOut }) => {
	const authLinks = (
		<ul className="navbar-nav mr-auto">
			 {/* <li className="btn btn-secondary">
				<Link to="/dashboard">
					<i className="fas fa-user"></i>
					<span className="hide-sm">Dashboard</span>
				</Link>
			</li>  */}
			
			{/* <DropdownButton title="Profile">
				<Link onClick={logOut} to="/login" replace>
					<i className="fas fa-sign-out-alt">Profile</i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
					
				</Link>
				</DropdownButton> */}
			
			 <DropdownButton style = {{color:"white",width:"300px", display:"inline-block"}}  title="Profile">
    
	  <MenuItem href="#books">Welcome,{user.name}</MenuItem>

       <Link to={"/updateUser/"} style={{ textDecoration: 'none' }}><MenuItem href="#podcasts">Create Profile</MenuItem></Link>

	   <Link to={"/editUser/" + user.id} style={{ textDecoration: 'none' }}><MenuItem href="#podcasts">Edit Profile</MenuItem></Link>

	   
	  {/* <MenuItem linkButton={true}  component={Link} to={"/updateUser/" + user.id} title="Edit Profile"  hasBullet={true} >
				Edit User
	 </MenuItem> */}
	
	  {/* <Link type="button" to={'/details/' + user.id} className="btn btn-warning">Details</Link> */}
      <MenuItem href="#addBlog" onClick={logOut} to="/login"> Logout</MenuItem>
	
    </DropdownButton>
	
		</ul>
		
		
	);
	const guestLinks = (
		<ul className="nav-links">
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);

	return (
		<Navbars bg="light" expand="lg">
		<Container>
		  <Navbars.Brand href="#home">React-Bootstrap</Navbars.Brand>
		  <Navbars.Toggle aria-controls="basic-navbar-nav" />
		  <Navbars.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			  <Nav.Link href="#home">Home</Nav.Link>
			  <Nav.Link href="#link">Link</Nav.Link>
			  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				<NavDropdown.Item href={"/editUser/" + user.id}>Edit Profile</NavDropdown.Item>
				<NavDropdown.Item href="/updateUser/">
				  Edit User
				</NavDropdown.Item>
				<NavDropdown.Item href="/login" onClick={logOut}>LogOut</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">
				  Separated link
				</NavDropdown.Item>
			  </NavDropdown>
			</Nav>
		  </Navbars.Collapse>
		</Container>
		{!loading && (
				<Fragment>{isLoggedIn ? authLinks : guestLinks}</Fragment>
			)}
	  </Navbars>
	);
  }
// 		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// 			{/* <h2>
// 				<Link to="/">HOME</Link>
// 			</h2> */}
// 			<a className="navbar-brand" href="#"></a>
// 			<button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon" />
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="/dashboard">
//           Dashboard <span className="sr-only">(current)</span>
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown-item" href="#">
//             Action
//           </a>
//           <a className="dropdown-item" href="#">
//             Another action
//           </a>
//           <div className="dropdown-divider" />
//           <a className="dropdown-item" href="#">
//             Something else here
//           </a>
//         </div>
//       </li>
//       <li className="nav-item">
//         <a
//           className="nav-link disabled"
//           href="#"
//           tabIndex={-1}
//           aria-disabled="true"
//         >
//           Disabled
//         </a>
//       </li>
//     </ul>
   
//   </div>
// 			{!loading && (
// 				<Fragment>{isLoggedIn ? authLinks : guestLinks}</Fragment>
// 			)}
// 		</nav>


Navbar.propTypes = {
	logOut: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logOut })(Navbar);