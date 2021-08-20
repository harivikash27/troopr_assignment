import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";


const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  let history = useHistory();
  let dispatch = useDispatch();
  const { name, email, contact, address } = state;

  const handleNameChange = (e) => {
    setState({ name:e.target.value});
  };
  const handleEmailChange = (e) => {
    setState({ email:e.target.value});
  };
  const handleContactChange = (e) => {
    setState({ contact:e.target.value});
  };
  const handleAddressChange = (e) => {
    setState({ address:e.target.value});
  };



  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addUser(state));
      history.push("/");
      setError("");
  };
  return (
      <div className="container">
        <h3>Create New User</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group"> 
            <label>User Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={name}
                onChange={handleNameChange}
                />
          </div>
          <div className="form-group" > 
          {/* <style>
            div {height: 100px;} 
            </style> */}
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={address}
                onChange={handleAddressChange}
                />
          </div>
          <div className="form-group">
            <label>Contact: </label>
            <input 
                type="text" 
                className="form-control"
                value={contact}
                onChange={handleContactChange}
                />
          </div>
          <div className="form-group" >
            <label>Email: </label>
            <input 
                
                type="text" 
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary m-2" />
          </div>
        </form>
      </div>
  );
};

export default AddUser;
