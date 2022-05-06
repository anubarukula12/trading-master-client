import React, { useState } from "react";
import { useNavigate } from "react-router";
import AdminNavbar from "../AdminNavbar";
import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
const AddStock = () => {
  const [form, setForm] = useState({
    name: "",
    code: "",
    description: "",
    sector: "",
    exchange_id: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  // This function will handle the submission.
  const onSubmit = async (e) => {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newStock = { ...form };

    await axios
      .post("http://localhost:5000/stock/add", newStock)

      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
   
    setForm({
      name: "",
      code: "",
      description: "",
      sector: "",
      exchange_id: "",
    });
    navigate("/stocks");
  };

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <AdminNavbar />
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  value={form.code}
                  onChange={(e) => updateForm({ code: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={form.description}
                  onChange={(e) => updateForm({ description: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">Sector</label>
                <input
                  type="text"
                  className="form-control"
                  id="sector"
                  value={form.sector}
                  onChange={(e) => updateForm({ sector: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">Exchange ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="exchange_id"
                  value={form.exchange_id}
                  onChange={(e) => updateForm({ exchange_id: e.target.value })}
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="submit"
                  value="Insert Stock"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AddStock;
