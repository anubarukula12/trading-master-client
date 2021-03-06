import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaEdit,FaTrash } from "react-icons/fa";

const Stock = (props) => (
  <tr>
    <td>{props.stock.name}</td>
    <td>{props.stock.code}</td>
    <td>{props.stock.description}</td>
    <td>{props.stock.sector}</td>
    <td>{props.stock.exchange_id}</td>
    <td>
      <Link className="btn btn-link text-decoration-none" to={`/stock/edit/${props.stock._id}`}>
      <FaEdit/>
      </Link>{" "}
      |
      <button
         style={{"border":"none", "size":"1000px"}}
        onClick={() => {
          const confirmBox = window.confirm("Do you really want to delete ");
          if (confirmBox === true) {
            props.deleteStock(props.stock._id);
          }
        }}
      >
        <FaTrash color="red"/>
      </button>
    </td>
  </tr>
);

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  // This method fetches the stocks from the database.
  useEffect(() => {
    const getStocks = async () => {
      await axios
        .get(`http://localhost:5000/stock/`)
        .then((res) => {
          const stocks = res.data;
          setStocks(stocks);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getStocks();

    return;
  }, [stocks.length]);

  // This method will delete a stock
  async function deleteStock(id) {
    await axios(`http://localhost:5000/stock/${id}`, {
      method: "DELETE",
    });

    const newStocks = stocks.filter((el) => el._id !== id);
    setStocks(newStocks);
  }

  // This method will map out the stocks on the table
  function stockList() {
    return stocks.map((stock) => {
      return (
        <Stock
          stock={stock}
          deleteStock={() => deleteStock(stock._id)}
          key={stock._id}
        />
      );
    });
  }

  // This following section will display the table with the stocks of individuals.
  return (
    <div>
      <AdminNavbar />
      <Container>
        <Row>
          <Col
         
           xs={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h3>Stock List</h3>{" "}
            <LinkContainer to="/addstock">
              <Button>Add Stock</Button>
            </LinkContainer>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Sector</th>
                  <th>Exchange</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{stockList()}</tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default StockList;
