import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Col, Container, Row } from "react-bootstrap";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.role}</td>
    {/* <td>
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
    </td> */}
  </tr>
);

export default function UserList() {
  const [users, setUsers] = useState([]);

  // This method fetches the users from the database.
  useEffect(() => {
    async function getUsers() {
      await axios
        .get(`http://localhost:5000/user/`)

        .then((res) => {
          const users = res.data;
          setUsers(users);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    getUsers();

    return;
  }, [users.length]);

  // This method will delete a user
  async function deleteUser(id) {
    await fetch(`http://localhost:5000/user/delete/${id}`, {
      method: "DELETE",
    });

    const newUsers = users.filter((el) => el._id !== id);
    setUsers(newUsers);
  }

  // This method will map out the users on the table
  function userList() {
    return users.map((user) => {
      return (
        <User
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
      <AdminNavbar />
      <Container>
        <Row>
          <Col xs={12}  className="p-5 m-auto shadow-sm rounded-lg .ml-3">
            <h3>Users List</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>{userList()}</tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
