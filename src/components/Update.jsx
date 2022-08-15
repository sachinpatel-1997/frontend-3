import React, { useEffect, useState } from "react";
import { getUserAction, updateUserAction } from '../actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,  useHistory } from 'react-router-dom';
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    buttonProgress: {
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  },
}));

const Update = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();
     const history = useHistory();
    const [state, setState] = useState({
        name: '',
        email: '',
        role: '' ,
        
        
    }
    );
    // const loading = useSelector((state) => state.users?.loading);
    // console.log(loading)
    const  result  = useSelector((state) => state.users?.results);
    console.log(result)
    useEffect(() => {
        dispatch(getUserAction(id));
    }, []);

    useEffect(() => {
        if (result) {
            setState({ ...result });
        }
    }, [result]);

    const { name, email, role } = state;

    const handleTextChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserAction(state, id,history));
    }

    return (

      <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Update User</h1>
      <form
        className={classes.root}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleOnSubmit}
      >
        <TextField
          name="name"
          label="Name"
          value={name || ""}
          onChange={handleTextChange}
          fullWidth

        />
        <TextField
          name="email"
          label="Email"
          value={email || ""}
          onChange={handleTextChange}
          fullWidth
        />
        <TextField
          name="role"
          label="Role"
          value={role || ""}
          onChange={handleTextChange}
          fullWidth
        />
        <Button
         
          type="submit"
          variant="contained"
          color="primary"
          onChange={handleTextChange}
        
        >
          
          Submit
        </Button>
      
      <Button href="/dashboard">
        Back
      </Button>
      
          <CircularProgress size={24} className={classes.buttonProgress} />
        
      </form>
    </React.Fragment>
      
    );
}


export default Update;