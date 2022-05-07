import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import DashBoard from "./DashBoard";
import axios from "axios";
export default function AddPortfolio() {
 
  const [form, setForm] = useState({
    user_id: localStorage.getItem("user_id"),
    code: "",
    purchase_quantity: "",
    purchase_price: "",
    purchase_date: "",
    sale_quantity: "",
    sale_price: "",
    sale_date: "",
  });
  const navigate = useNavigate();
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    async function getStocks() {
      await axios
        .get(`http://localhost:5000/portfolio/`)

        .then((res) => {
          const stocks = res.data;
          setStocks(stocks);
          console.log("portfolio", stocks);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    getStocks();

    return;
  }, [stocks.length]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPortfolio = { ...form };

    await axios
      .post("http://localhost:5000/portfolio/add", newPortfolio)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    setForm({
      user_id: localStorage.getItem("user_id"),
      code: "",
      purchase_quantity: "",
      purchase_price: "",
      purchase_date: "",
      sale_quantity: "",
      sale_price: "",
      sale_date: "",
    });
    console.log(localStorage.getItem("user_id"));
    navigate("/portfolios");
  }

  // This following section will display the form that takes the input from the portfolio.
  return (
    <div>
      <DashBoard />
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h3>Add Portfolio Record</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Code</label>
                <select onChange={(e) => updateForm({ code: e.target.value })}>
                  <option value="⬇️ Select a Stock ⬇️">
                    {" "}
                    -- Select a Stock --{" "}
                  </option>
                  {/* Mapping through each stock object in our stocks array
          and returning an option element with the appropriate attributes / values.
         */}
                  {stocks.map((stock) => (
                    <option key={stock.code} value={stock.code}>
                      {stock.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bprice">Purchase Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="bprice"
                  name="pprice"
                  min="1"
                  value={form.purchase_price}
                  onChange={(e) =>
                    updateForm({ purchase_price: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="bqty">Purchase Qty</label>
                <input
                  type="number"
                  className="form-control"
                  id="bqty"
                  min="1"
                  value={form.purchase_quantity}
                  onChange={(e) =>
                    updateForm({ purchase_quantity: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="bprice">Sell Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="sprice"
                  min="1"
                  value={form.sale_price}
                  onChange={(e) => updateForm({ sale_price: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sqty">Sell Qty</label>
                <input
                  type="number"
                  className="form-control"
                  id="sqty"
                  min="1"
                  value={form.sale_quantity}
                  onChange={(e) =>
                    updateForm({ sale_quantity: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="bdate">Purchase Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="bdate"
                  value={form.purchase_date}
                  onChange={(e) =>
                    updateForm({ purchase_date: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="sdate">Sell Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="sdate"
                  value={form.sale_date}
                  onChange={(e) => updateForm({ sale_date: e.target.value })}
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add Stock"
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
