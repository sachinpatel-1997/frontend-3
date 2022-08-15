// // import React, { useState } from "react";
// //  import { useHistory, useParams } from "react-router-dom";
// // // import axios from 'axios';
// // import {
// //   makeStyles,
// //   TextField,
// //   Button,
// //   CircularProgress,
// // } from "@material-ui/core";
// // import { useSelector, useDispatch } from "react-redux";
// //  import { updateUserAction} from '../actions/creators';
// // // import { updateUser } from "actions/actions";

 
// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     "& > *": {
// //       margin: theme.spacing(1),
// //       width: "50ch",
// //     },
// //     buttonProgress: {
// //       color: "#fff",
// //       position: "absolute",
// //       top: "50%",
// //       left: "50%",
// //       marginTop: -12,
// //       marginLeft: -12,
// //     },
// //   },
// // }));

// // function UpdateUser() {
// //   const { id } = useParams();
// //    const classes = useStyles();
// //    const history = useHistory();
// //    const dispatch = useDispatch();
// //   const loading = useSelector((state) => state.users?.loading);

// //   const initialValues = {
// //      name: "",
// //   email: "",
// //   password: "",
// //    role: "",
// //    profile: ""
  
// // };

// //   // const [inputs, setInputs] = useState({
// //   //   name: "",
// //   //   email: "",
// //   //   password: "",
// //   //   role: ""
// //   // });
// //   const [inputs, setInputs] = useState(initialValues);
// //   //  const [ setErrors] = useState({});
// //   const [submitted, setSubmitted] = useState(false);
// // 	// const [isSubmit, setIsSubmit] = useState(false);
// //   // const [formErrors, setFormErrors] = useState({});
// //   // useEffect(() => {
// //   //   handleValidate(inputs);
// //   // }, [inputs]);

// //   function handleChange(e) {
// //     const { name, value } = e.target;
// //     setInputs((inputs) => ({ ...inputs, [name]: value }));
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     // const formData = new FormData();
// //     // formData.append('imgCollection', inputs.imgCollection);
// //     // formData.append('email', inputs.email);
// //     // formData.append('password', inputs.password);
// //     // formData.append('name', inputs.name);
// //     // formData.append('role', inputs.role);

// //     // axios.post('', formData)
// //         //  .then(res => {
// //         //     console.log(res);
// //         //  })
// //         //  .catch(err => {
// //         //     console.log(err);
// //         //  });
// //     setSubmitted(true);
// //     // setFormErrors(validate(inputs));
// //     // if (handleValidate(inputs)) {
// //        dispatch(updateUserAction(inputs, id,  history));
// //       //  dispatch(imageUserAction(inputs));
// //     // }
// //   }
// //   const handlePhoto = (e) => {
// //     setInputs({...inputs, profile: e.target.files[0]});
// // }
 
// //   // function handleValidate(values) {
// //   //   const errors = {};
// //   //   let isValid = true;
// //   //   if (!values.name) {
// //   //     isValid = false;
// //   //     errors.name = "Please enter name";
// //   //   }
// //   //   if (!values.email) {
// //   //     isValid = false;
// //   //     errors.email = "Please enter email.";
// //   //   }
// //   //   if (!values.password) {
// //   //     isValid = false;
// //   //     errors.password = "Please enter password";
// //   //   }
// //   //   if (!values.role) {
// //   //       isValid = false;
// //   //       errors.role = "Please enter role";
// //   //     }
// //   //    setErrors(errors);
// //   //   return isValid;
// //   // }

// //   // const validate = (values) => {
// // 	// 	const errors = {};
// // 	// 	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
			
// // 	// 	if (!values.name) {
// // 	// 	  errors.name = "Name is required!";
// // 	// 	} else if (!regex.test(values.name)) {
// // 	// 	  errors.name = "This is not a valid Name format!";
// // 	// 	}
// // 	// 	if (!values.email) {
// // 	// 	  errors.email = "Email is required!";
// // 	// 	} else if (!regex.test(values.email)) {
// // 	// 	  errors.email = "This is not a valid email format!";
// // 	// 	}
// // 	// 	if (!values.password) {
// // 	// 	  errors.password = "Password is required";
// // 	// 	} else if (values.password.length < 4) {
// // 	// 	  errors.password = "Password must be more than 4 characters";
// // 	// 	} else if (values.password.length > 10) {
// // 	// 	  errors.password = "Password cannot exceed more than 10 characters";
// // 	// 	}
    	
// // 	// 	if (!values.role) {
// // 	// 	  errors.role = "Role is required!";
// // 	// 	} else if (!regex.test(values.role)) {
// // 	// 	  errors.role = "This is not a valid role format!";
// // 	// 	}
// //   //   // if (!values.imgCollection) {
// // 	// 	//   errors.imgCollection = "Image is required!";
// // 	// 	// } else if (!regex.test(values.imgCollection)) {
// // 	// 	//   errors.imgCollection = "This is not a valid Image format!";
// // 	// 	// }
// // 	// 	return errors;
// // 	//   };
// //   return (
// //     <React.Fragment>
// //       <h1 style={{ textAlign: "center" }}>Edit User</h1>
// //       <form
// //         className={classes.root}
// //         style={{
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           flexDirection: "column",
// //         }}
// //         onSubmit={handleSubmit}
// //         encType='multipart/form-data'
// //       >
// //         <div>
// //         <TextField
// //           type="text"
// //           name="name"
// //           label="Name"
// //           value={inputs.name}
// //           onChange={handleChange}
// //           fullWidth
// //         />
       
// //         </div>

// //         <div>
// //         <TextField
// //           type="text"
// //           name="email"
// //           label="email"
// //           value={inputs.email}
// //           onChange={handleChange}
// //           fullWidth
// //         />
       
// //         </div>
// //         <div>
// //         <TextField
// //           type="password"
// //           name="password"
// //           label="Password"
// //           value={inputs.password}
// //           onChange={handleChange}
// //           fullWidth
// //         />
        
       
// //         </div>
       
// //         {/* <TextField
// //           type="text"
// //           name="role"
// //           label="Role"
// //           value={inputs.role}
// //           onChange={handleChange}
// //           fullWidth
// //         /> */}
// //         <div>
// //         <select
// //           name="role"
// //           label="Role"
// //           value={inputs.role}
// //           onChange={handleChange}
// //           fullWidth
// //         >
           
// //           <option value={"admin"}>admin</option>
// //           <option value={"user"}>user</option>
// //         </select>
        
// //         </div>
// //         <div>
// //         <input 
// //                 type="file" 
// //                 accept=".png, .jpg, .jpeg"
// //                 name="image"
// //                 onChange={handlePhoto}
// //             />
// //           </div>
// //         <Button
// //           disabled={loading}
// //           type="submit"
// //           variant="contained"
// //           color="primary"
// //           onChange={submitted}
        
// //         >
// //           Submit
// //         </Button>
// //         {loading && (
// //           <CircularProgress size={24} className={classes.buttonProgress} />
// //         )}
// //       </form>
// //     </React.Fragment>
// //   );
// // }

// // export default UpdateUser;


// import React, { useState, useEffect } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// // import MainScreen from "../../components/MainScreen";
// // import "./ProfileScreen.css";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUserAction } from "../actions/creators";
// // import Loading from "../../components/Loading";
// // import ErrorMessage from "../../components/ErrorMessage";
// import PropTypes from "prop-types";
// const UpdateUser = ({ location, history }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   // const [pic, setPic] = useState();
//   const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   // const [ setPicMessage] = useState();

//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.auth);
//   console.log(userLogin)
//   const { user } = userLogin;

//   // const userUpdate = useSelector((state) => state.userUpdate);
//   // const { loading, error, success } = userUpdate;

//   useEffect(() => {
//     if (user) {
//       history.push("/");
//     } else {
//       setName(user.name);
//       setEmail(user.email);
//       // setPic(user.pic);
//     }
//   }, [history, user]);

//   // const postDetails = (pics) => {
//   //   setPicMessage(null);
//   //   if (pics.type === "image/jpeg" || pics.type === "image/png") {
//   //     const data = new FormData();
//   //     data.append("file", pics);
//   //     data.append("upload_preset", "notezipper");
//   //     data.append("cloud_name", "piyushproj");
//   //     fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//   //       method: "post",
//   //       body: data,
//   //     })
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         setPic(data.url.toString());
//   //         console.log(pic);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   } else {
//   //     return setPicMessage("Please Select an Image");
//   //   }
//   // };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     dispatch(updateUserAction({ name, email, password }));
//   };

//   return (
  
//       <div>
//         <Row className="profileContainer">
//           <Col md={6}>
//             <Form onSubmit={submitHandler}>
            
//               <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>
//               <Form.Group controlId="email">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>
//               <Form.Group controlId="password">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>
//               {/* <Form.Group controlId="confirmPassword">
//                 <Form.Label>Confirm Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>{" "} */}
              
//               {/* <Form.Group controlId="pic">
//                 <Form.Label>Change Profile Picture</Form.Label>
//                 <Form.File
//                   onChange={(e) => postDetails(e.target.files[0])}
//                   id="custom-file"
//                   type="image/png"
//                   label="Upload Profile Picture"
//                   custom
//                 />
//               </Form.Group> */}
//               <Button type="submit" varient="primary">
//                 Update
//               </Button>
//             </Form>
//           </Col>
//           {/* <Col
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img src={pic} alt={name} className="profilePic" />
//           </Col> */}
//         </Row>
//       </div>
  
//   );
// };
// UpdateUser.propTypes = {
// 	location: PropTypes.func.isRequired,
// 	history: PropTypes.bool,
// };
// export default UpdateUser;



import React, { useState } from "react";
import { connect } from "react-redux";
import { userActions } from "../actions/Auth";
// import { pushNotification } from "utils/notifications";
import {  useHistory } from "react-router-dom";
// import profile from "assets/images/user.svg";
import PropTypes from "prop-types";
function UpdateUser(props) {
  const { user, updateAdmin } = props;
  const { name, email,  profile, id } = user;
  const history = useHistory();
  const hiddenFileInput = React.useRef(null);

  const [previewSource, setPreviewSource] = useState(profile);
  const [saveChanges, setSaveChanges] = useState(false);
  const [userData, setUserData] = useState({
    email: email,
    name: name,
    // role: role,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
      setUserData((pre) => ({
        ...pre,
        profile: reader.result,
      }));
    };
    setSaveChanges(true);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "profile") {
      const file = e.target.files[0];
      previewFile(file);
    } else {
      setUserData((pre) => ({
        ...pre,
        [name]: value,
      }));
    }
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleCancel = () => {
    history.push("/");
  };

  const handleSubmit = () => {
    updateAdmin(id, userData);
  };

  return (
    <div className="container">
      <div className="row mt-5 mx-auto">
        <div className="col-4 py-5 d-flex justify-content-center bg-light m-3">
          <div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary rounded-circle"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </button>
              <input
                type="file"
                name="profile"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
            <div
              className="border border-dark rounded-circle my-2 d-flex justify-content-center align-items-center"
              style={{ width: "200px", height: "200px" }}
            >
              {previewSource ? (
                <img
                  src={previewSource}
                  width="200"
                  height="200"
                  className="rounded-circle"
                  alt=""
                />
              ) : (
                "No profile found"
              )}
            </div>
            <h5 className="text-center py-3">{user.name}</h5>
          </div>
        </div>
        <div className="col-7 bg-light p-5 m-3">
          <form>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  value={userData.name}
                  name="name"
                  onChange={handleChange}
                  disabled={!saveChanges}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  
                  className="form-control-plaintext"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                  disabled={!saveChanges}
                />
              </div>
            </div>

            {/* <div className="form-group row">
              <label className="col-sm-2 col-form-label">Role</label>
              <div className="col-sm-10">
                <select
                  className="form-control-plaintext"
                  name="role"
                  onChange={handleChange}
                  value={userData.role}
                  disabled={!saveChanges}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div> */}

            <div className="row mt-5">
              {saveChanges ? (
                <>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-secondary btn-block mb-4"
                      onClick={() => setSaveChanges(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-secondary btn-block mb-4"
                      onClick={handleCancel}
                    >
                      Go back
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      onClick={() => setSaveChanges(true)}
                    >
                      Edit Profile
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function mapState(state) {
  const {  auth } = state;
  const { user } = auth;
  return { user };
}

const actionCreators = {
  updateAdmin: userActions.updateAdmin,
};

UpdateUser.propTypes = {
	user: PropTypes.object.isRequired,
  updateAdmin: PropTypes.func.isRequired,
};

export default connect(mapState, actionCreators)(UpdateUser);
