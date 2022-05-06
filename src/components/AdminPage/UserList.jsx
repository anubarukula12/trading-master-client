import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserData = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.role}</td>
    <td>
      <Link className="btn btn-link" to={`/user/edit/${props.user._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteUser(props.user._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

const UserList = async () => {
  const [users, setUsers] = useState([]);
  // This method fetches the users from the database.
  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get(`http://localhost:5000/user/`)

        .then((res) => {
          const users = res.data;
          console.log("users are", users);
          setUsers(users);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getUsers();

    return;
  }, [users.length]);

  // This method will delete a user
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/user/delete/${id}`, {
      method: "DELETE",
    });

    const newUsers = users.filter((el) => el._id !== id);
    setUsers(newUsers);
  };

  // This method will map out the users on the table
  function userList() {
    return users.map((user) => {
      return (
        <UserData
          user={user}
          deleteUser={() => deleteUser(user._id)}
          key={user._id}
        />
      );
    });
  }

  // This following section will display the table with the users of individuals.
  return (
    <div>
      <h3>User List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{userList()}</tbody>
      </table>
    </div>
  );
};
export default UserList;
