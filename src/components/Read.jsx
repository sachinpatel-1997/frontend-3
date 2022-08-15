// import React, { useEffect, useState } from 'react';

// import { Link, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsersAction, deleteUserAction } from '../actions/creators';
// import * as ReactBootstrap from 'react-bootstrap';
// import ReactPaginate from 'react-paginate';
// import './index.css'
// import {
//   makeStyles,
//   useTheme,
//   AppBar,
//   Button,
//   TableContainer,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   useMediaQuery,
// } from "@material-ui/core";

// import {
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
// } from "@material-ui/icons";



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   table: {
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "center",
//     marginTop: '60px',
//     maxWidth: 1600,
//     maxHeight: 400,
    
//   },
  
// }));

// const Read = () => {
//   const history = useHistory();
//   const classes = useStyles();
//     const theme = useTheme();
//     const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
//     const [id, setId] = useState("");
//        const [open, setOpen] = useState(false);
    
//     const dispatch = useDispatch();
//     const [searchTerm, setSearchTerm] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [pageNumber, setPageNumber] = useState(0);


//     const  users  = useSelector(state => state.users?.results);
//     // const user = useSelector(state => state.users?.results[1]);
//     // console.log(user)
//     const usersPerPage = 10;
//     const pagesVisited = pageNumber * usersPerPage;
//     const pageCount = Math.ceil(users.length / usersPerPage);

//     const changePage = ({ selected }) => {
//         setPageNumber(selected);
//     }

//     const openDialog = (id) => {
//           setOpen(true);
//           setId(id);
//         };
      
//         const handleClose = () => {
//           setOpen(false);
//         };
      
//         const confirmDelete = () => {
//           dispatch(deleteUserAction(id,history));
//         };
      
//     useEffect(() => {
//         dispatch(getUsersAction(history), setLoading(true));
//     }, []);

//     return (
//       <React.Fragment>
      

// <AppBar position="static">
        
//        </AppBar>
//        <input
//                                 type="text"
//                                 className="form-control "
//                                 placeholder="Search user"
//                                 onChange={(e) => {
//                                     setSearchTerm(e.target.value);
//                                 }}/>
//        <Link to="/create">
      
//          <Button
//          variant="contained"
//          color="primary"
//           className={classes.button}
//            startIcon={<AddIcon />}
//        >
//          Create User
//         </Button>
//       </Link>
//       <TableContainer component={Paper} style={{maxHeight: 450, position: 'fixed'}}>
//         <Table className={classes.table} aria-label="simple table" stickyHeader>
//            <TableHead>
//              <TableRow>
//                <TableCell>S.No</TableCell>
//                <TableCell>Name</TableCell>
//                <TableCell>Email</TableCell>
//                <TableCell>Role</TableCell>
//                <TableCell>Update</TableCell>
//                <TableCell>Delete</TableCell>
//              </TableRow>
//            </TableHead>
//            <TableBody>
//            {loading ?
//               users && users.slice(pagesVisited, pagesVisited + usersPerPage).filter(val => {
//                  if (searchTerm === "") {
//                    return val;
//                   } else if (
//                      val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       val.role.toLowerCase().includes(searchTerm.toLowerCase())
//                   ) {
//                       return val;
//                    }
//                        return false;           
//                    }).map((user, index) => 
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {index + 1}
//                 </TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell>
//                   <Link to={`/update/${user.id}`}>
//                     <EditIcon>edit</EditIcon>
//                   </Link>
//                 </TableCell>
//                 <TableCell>
//                   <DeleteIcon onClick={() => openDialog(user.id)}>
//                     delete
//                   </DeleteIcon>
//                 </TableCell>
//               </TableRow>
//            ) :
//            <ReactBootstrap.Spinner animation="border" variant="primary" />
//        }
//           </TableBody>
//         </Table>
//         <div id="react-paginate">
//                     <ReactPaginate
//                         pageCount={pageCount}
//                         onPageChange={changePage}
//                         breakClassName={'page-item'}
//                         breakLinkClassName={'page-link'}
//                         containerClassName={'pagination'}
//                         pageClassName={'page-item'}
//                         pageLinkClassName={'page-link'}
//                         previousClassName={'page-item'}
//                         previousLinkClassName={'page-link'}
//                         nextClassName={'page-item'}
//                         nextLinkClassName={'page-link'}
//                         activeClassName={'active'} 

//                     />
//                      </div> 
//       </TableContainer>



//       {open && (
//          <Dialog
//            fullScreen={fullScreen}
//            open={open}
//            onClose={handleClose}
//            aria-labelledby="Delete User"
//          >
//            <DialogContent style={{ width: 300 }}>
//              <DialogContentText>Are you sure?</DialogContentText>
//            </DialogContent>
//            <DialogActions>
//              <Button autoFocus onClick={handleClose} color="primary">
//                Cancel
//              </Button>
//              <Button onClick={confirmDelete}    color="primary" autoFocus>
//                Delete
//              </Button>
//            </DialogActions>
//          </Dialog>
//        )}
      
//      </React.Fragment>
      
//    )

//      }
    
// export default Read;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dummyProfile from "assets/images/user.svg";
import {
  makeStyles,
  useTheme,
  AppBar,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction, deleteUserAction } from '../actions/creators';
// import * as ReactBootstrap from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: '60px',
    maxWidth: 1600,
    maxHeight: 400,
  },
}));

function Read() {
  //  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  // const users = useSelector((state) => state.users?.items);
  const  users  = useSelector((state) => state.users?.results);
  const [id, setUserId] = useState("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  //     const [loading, setLoading] = useState(false);
      const [pageNumber, setPageNumber] = useState(0);

      const usersPerPage = 10;
          const pagesVisited = pageNumber * usersPerPage;
          const pageCount = Math.ceil(users.length / usersPerPage);
      
          const changePage = ({ selected }) => {
              setPageNumber(selected);
          }
  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  useEffect(() => {
    console.log('loading', loading)
    if (!loading) {
      setOpen(loading);
    }
  }, [loading]);

  const openDialog = (id) => {
    setOpen(true);
    setUserId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmDelete = () => {
    dispatch(deleteUserAction(id));
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
      <input
                                type="text"
                                className="form-control "
                                placeholder="Search user"
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}/>

      </AppBar>
      <Link to="/create">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Create User
        </Button>
      </Link>
      <TableContainer component={Paper} style={{maxHeight: 450, position: 'fixed'}}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users && users.slice(pagesVisited, pagesVisited + usersPerPage).filter(val => {
                 if (searchTerm === "") {
                   return val;
                  } else if (
                     val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.role.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                      return val;
                   }
                       return false;           
                   
            }).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell> 
                  {row.profile ? (
                    <img
                      src={row.profile}
                      alt="profile"
                      width="60"
                      height="60"
                      className="rounded-circle border"
                    />
                  ) : (
                    <img
                      src={dummyProfile}
                      alt="profile"
                      width="40"
                      height="40"
                      className="rounded-circle border"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Link to={`/update/${row.id}`}>
                    <EditIcon>edit</EditIcon>
                  </Link>
                </TableCell>
                <TableCell>
                  <DeleteIcon onClick={() => openDialog(row.id)}>
                    delete
                  </DeleteIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div id="react-paginate">
                     <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={changePage}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        activeClassName={'active'} 

                    />
                     </div>
      </TableContainer>
      {open && (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="Delete User"
        >
          <DialogContent style={{ width: 300 }}>
            <DialogContentText>Are you sure?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={confirmDelete} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
}

export default Read;
