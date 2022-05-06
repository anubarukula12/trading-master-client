import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Col, Container, Row,Button } from "react-bootstrap";
import axios from "axios";
const StockEdit=()=>{
  const [form, setForm] = useState({
    name: "",
    code: "",
    description: "",
    sector: "",
    exchange_id: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
       await axios.get(
        `http://localhost:5000/stock/${params.id.toString()}`
      )
      .then((res) => {
        const record = res.data;
        setForm(record);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

     
    

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedstock = {
      name: form.name,
      code: form.code,
      description: form.description,
      sector: form.sector,
      exchange_id: form.exchange_id,
    };

    // This will send a post request to update the data in the database.
    await axios.post(`http://localhost:5000/stock/update/${params.id}`,editedstock) 
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.message);
    });

    navigate("/stocks");
  
  }
  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
        <Container id="container">
      <Row>
        <Col
          lg={5}
          md={6}
          sm={12}
          className="p-5 m-auto shadow-sm rounded-lg .ml-3"
        >
      <h3>Update Stock</h3>
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
        </div><br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Update Stock"
            className="btn btn-primary"
          />
        </div>
      </form></Col></Row></Container>
    </div>
  );
}
export default StockEdit;