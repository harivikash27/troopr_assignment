import React, { useEffect } from "react";
import { Link ,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";




const Home = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    console.log("id", id);
    if (window.confirm("Are you sure wanted to delete the user ?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div>
         <h2 className="text-center">Users List</h2>
    <div >
            <button className="btn btn-primary" onClick={() => history.push("/addUser")}> Add User</button>
    </div>
         
         <br></br>
                <table className="table">

                    <thead className="thead-light">
                        <tr>
                            <th> User Name</th>
                            <th> ADDRESS</th>
                            <th> CONTACT</th>
                            <th> Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                </table>
                {users && users.map((user)=>(
                  <tr>
                    <td>{user.username}</td>
                    <td>{user.address}</td>
                    <td>{user.contact}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={"/edit/"+user._id}>edit</Link> |
                      
                      <button onClick={() => { handleDelete(user._id) }}>delete</button>
                    </td>
                  </tr>
                ))}
     </div>
 )

};

export default Home;
