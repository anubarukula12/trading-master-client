import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
const Create= () =>{
 const [form, setForm] = useState({
   name: "",
   code: "",
   status: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 const updateForm=(value)=> {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 const  onSubmit=async (e) =>{
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newCountry = { ...form };
 
   await axios.post("http://localhost:5000/record/add", newCountry)
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", code: "", status: "" });
   navigate("/country");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <AdminNavbar/>
      <Container id="container">
      <Row>
        <Col
          lg={5}
          md={6}
          sm={12}
          className="p-5 m-auto shadow-sm rounded-lg .ml-3"
        >
     <h3>Create New Country</h3>
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
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="activeOptions"
             id="activeOption"
             value="active"
             checked={form.active === "active"}
             onChange={(e) => updateForm({ active: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Active</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="activeOptions"
             id="inactiveOption"
             value="Inactive"
             checked={form.active === "Inactive"}
             onChange={(e) => updateForm({ active: e.target.value })}
           />
           <label htmlFor="inactiveOption" className="form-check-label">Inactive</label>
         </div>
        
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Country"
           className="btn btn-primary"
         />
       </div>
     </form>
     </Col>
     </Row>
     </Container>
   </div>
 );
}
export default Create;