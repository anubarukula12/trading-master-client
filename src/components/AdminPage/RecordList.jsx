import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEdit,FaTrash } from "react-icons/fa";
const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.code}</td>
    <td>{props.record.status}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
  <FaEdit/>  
      </Link>{" "}
      |
      <button
        className="btn btn-link"    style={{"border":"none", "size":"1000px"}}
        onClick={() => {
          const confirmBox = window.confirm("Do you really want to delete ");
          if (confirmBox === true) {
          props.deleteRecord(props.record._id);
        }}
        }>
       <FaTrash color="red"/>
      </button>
    </td>
  </tr>
);

const RecordList = () => {
  const [records, setRecords] = useState([]);
  // This method fetches the records from the database.
  useEffect(() => {
    const getRecords = async () => {
      const response = await axios(`http://localhost:5000/record/`);
      const records = response.data;
      setRecords(records);
    };

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  const deleteRecord = async (id) => {
    await axios(`http://localhost:5000/record/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  };

  // This method will map out the records on the table
  const recordList = () => {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  };

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <AdminNavbar />
      <Container>
        <Row>
          <Col
         
            xs={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
      <h3>Country List</h3>
      <LinkContainer to="/create">
        <Button>New Country</Button>
      </LinkContainer>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table></Col></Row></Container>
    </div>
  );
};
export default RecordList;
