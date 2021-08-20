import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";


const EditUser = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  let history = useHistory();
  let dispatch = useDispatch();
  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input Field");
    } else {
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
    }
  };
  return (
      <div className="container">
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group"> 
            <label>User Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={name}
                onChange={handleInputChange}
                />
          </div>
          <div className="form-group"> 
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={address}
                onChange={handleInputChange}
                />
          </div>
          <div className="form-group">
            <label>Contact: </label>
            <input 
                type="text" 
                className="form-control"
                value={contact}
                onChange={handleInputChange}
                />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input 
                type="text" 
                className="form-control"
                value={email}
                onChange={handleInputChange}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary m-2" />
          </div>
        </form>
      </div>
  );
};

export default EditUser;
