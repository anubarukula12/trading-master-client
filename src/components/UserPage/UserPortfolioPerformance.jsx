import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import DashBoard from "./DashBoard";
import { FaRupeeSign } from "react-icons/fa";
const Stock = (props) => (
  <tr>
    <td>{props.stock.code}</td>
    <td>
      <FaRupeeSign />
      {props.stock.purchase_price}
    </td>
    <td>{props.stock.purchase_quantity}</td>
    <td><FaRupeeSign/>{props.stock.purchase_quantity * props.stock.purchase_price}</td>
    <td>{props.stock.purchase_date.split("T")[0]}</td>
    <td>
      <FaRupeeSign />
      {props.stock.sale_price}
    </td>
    <td>
      <FaRupeeSign />
      {props.stock.purchase_quantity * props.stock.sale_price}
    </td>
    <td
      style={{
        color:
          props.stock.purchase_quantity * props.stock.sale_price -
            props.stock.purchase_quantity * props.stock.purchase_price <
          0
            ? "red"
            : "green",
      }}
    >
      <FaRupeeSign />{" "}
      {props.stock.purchase_quantity * props.stock.sale_price -
        props.stock.purchase_quantity * props.stock.purchase_price}
    </td>
  </tr>
);
const UserPortfolioPerformance = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    async function getStocks() {
      await axios
        .get(`http://localhost:5000/eod_stock_data/userstocks`, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })

        .then((res) => {
          const stocks = res.data;
          console.log("the stocks list", stocks);
          setStocks(stocks);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    getStocks();

    return;
  }, [stocks.length]);

  function stockList() {
    return stocks.map((stock) => {
      return <Stock stock={stock} key={stock._id} />;
    });
  }

  return (
    <div>
      <DashBoard />
      <Container>
        <Row>
          <Col sm={12} className="p-5 m-auto shadow-sm rounded-lg .ml-3">
            <form>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Code:</th>
                    <th>Purchase Price</th>
                    <th>Purchase Quantity</th>
                    <th>Purchase Value</th>
                    <th>Purchase Date</th>
                    <th>Current Price</th>
                    <th>Current Value</th>
                    <th>Profit and Loss</th>
                  </tr>
                </thead>
                <tbody>{stockList()}</tbody>
              </table>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UserPortfolioPerformance;
