import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Col, Container, Row, Button } from "react-bootstrap";
import DashBoard from "./DashBoard";
import axios from "axios";
import { FaChromecast } from "react-icons/fa";
const PortfolioListEdit = () => {
  const [form, setForm] = useState({
    code: "",
    purchase_quantity: "",
    purchase_price: "",
    purchase_date: "",
    sale_quantity: "",
    sale_price: "",
    sale_date: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:5000/portfolio/edit/${params.id.toString()}`)

        .then((res) => {
          const record = res.data;
          console.log("portfolio is", record);
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
    const editedportfolio = {
      user_id: localStorage.getItem("user_id"),
      code: form.code,
      purchase_quantity: form.purchase_quantity,
      purchase_price: form.purchase_price,
      purchase_date: form.purchase_date,
      sale_quantity: form.sale_quantity,
      sale_price: form.sale_price,
      sale_date: form.sale_date,
    };
    // This will send a post request to update the data in the database.
    await axios.post(
      `http://localhost:5000/portfolio/update/${params.id}`,
      editedportfolio
    );

    navigate("/portfolios");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
    <DashBoard/>
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h3>UpdatePorfolio List</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="code">Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  value={form.code}
                  onChange={(e) => updateForm({code:e.target.value })}
                  readOnly
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="name">PurchaseQuantity</label>
                <input
                  type="text"
                  className="form-control"
                  id="purchase_quantity"
                  value={form.purchase_quantity}
                  onChange={(e) =>
                    updateForm({ purchase_quantity: e.target.value })
                  }
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">PurchasePrice</label>
                <input
                  type="text"
                  className="form-control"
                  id="purchase_price"
                  value={form.purchase_price}
                  onChange={(e) =>
                    updateForm({ purchase_price: e.target.value })
                  }
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">PurchaseDate</label>
                <input
                  type="text"
                  className="form-control"
                  id="purchase_date"
                  value={form.purchase_date}
                  onChange={(e) =>
                    updateForm({ purchase_date: e.target.value })
                  }
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">SaleQuantity</label>
                <input
                  type="text"
                  className="form-control"
                  id="sale_quantity"
                  value={form.sale_quantity}
                  onChange={(e) =>
                    updateForm({ sale_quantity: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">SalePrice</label>
                <input
                  type="text"
                  className="form-control"
                  id="sale_price"
                  value={form.sale_price}
                  onChange={(e) => updateForm({ sale_price: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">SaleDate</label>
                <input
                  type="text"
                  className="form-control"
                  id="sale_date"
                  value={form.sale_date}
                  onChange={(e) => updateForm({ sale_date: e.target.value })}
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Portfolio "
                  className="btn btn-primary"
                />
              </div> */}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PortfolioListEdit;
