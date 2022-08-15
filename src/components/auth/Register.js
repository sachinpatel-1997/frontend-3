import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
import { register } from "../../actions/authActions";
import PropTypes from "prop-types";



const Register = ({  register, isLoggedIn }) => {
	// const [formData, setFormData] = useState({
	// 	name: "",
	// 	email: "",
	// 	password: "",
	// });
	const initialValues = { name: "", email: "", password: "" };
	const [formData, setFormData] = useState(initialValues);
	const [isSubmit, setIsSubmit] = useState(false);

	const { name, email, password } = formData;
	const [formErrors, setFormErrors] = useState({});
	const history = useHistory();
	const dispatch = useDispatch();
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	
	const onSubmit = async (e) => {
		console.log("Form data", e);
		e.preventDefault();
		setFormErrors(validate(formData));
		setIsSubmit(true);
		dispatch(register(formData,history));
		register({ name, email, password });
			
	};

	// Redirect if logged in
	if (isLoggedIn) {
		return <Redirect to="/login" />;
	}


	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		  console.log(formData);
		}
	  }, [formErrors]);


	  const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.name) {
		  errors.name = "Name is required!";
		}
		if (!values.email) {
		  errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
		  errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
		  errors.password = "Password is required";
		} else if (values.password.length < 4) {
		  errors.password = "Password must be more than 4 characters";
		} else if (values.password.length > 10) {
		  errors.password = "Password cannot exceed more than 10 characters";
		}
		return errors;
	  };
	return (
		<div className="register-form">
			<h1 className="heading">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			{/* <Alert /> */}
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={formData.name}
						onChange={(e) => onChange(e)}
						
					/>
					   <p style={{color:'red'}}>{formErrors.name}</p>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={formData.email}
						onChange={(e) => onChange(e)}
					/>
					<p style={{color:'red'}}>{formErrors.email}</p>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={formData.password}
						onChange={(e) => onChange(e)}
					/>
					<p style={{color:'red'}}>{formErrors.password}</p>
				</div>
				
				<button type="submit" className="btn btn-primary" href="/login">Register</button>
				
			</form>
			<p className="link">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, {  register })(Register);