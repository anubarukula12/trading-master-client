import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
const Stock = (props) => (
  <tr>
    <td>{moment(props.eod_stock_data.eod_date).format("DD-MMM-YYYY")}</td>
    <td>{props.eod_stock_data.stock_id}</td>
    <td>{props.eod_stock_data.open}</td>
    <td>{props.eod_stock_data.high}</td>
    <td>{props.eod_stock_data.low}</td>
    <td>{props.eod_stock_data.last}</td>
    <td>{props.eod_stock_data.technical_rating}</td>
    <td>{props.eod_stock_data.oscillators_rating}</td>
    <td>{props.eod_stock_data.moving_averages_rating}</td>

    <td>
      <Link
        className="btn btn-link"
        to={`/eod_stock_data/edit/${props.eod_stock_data._id}`}
      >
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteStock(props.eod_stock_data._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

const EODStockList = () => {
  const [eod_stock_datas, setStocks] = useState([]);

  // This method fetches the eod_stock_datas from the database.
  useEffect(() => {
    const getStocks = async () => {
      await axios
        .get(`http://localhost:5000/eod_stock_data/`)
        .then((res) => {
          const eod_stock_data = res.data;
          console.log(eod_stock_data);
          setStocks(eod_stock_data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getStocks();

    return;
  }, [eod_stock_datas.length]);

  // This method will delete a eod_stock_data
  const deleteStock = async (id) => {
    await axios(`http://localhost:5000/eod_stock_data/${id}`, {
      method: "DELETE",
    });

    const newStocks = eod_stock_datas.filter((el) => el._id !== id);
    setStocks(newStocks);
  };

  // This method will map out the eod_stock_datas on the table
  const eod_stock_dataList = () => {
    return eod_stock_datas.map((eod_stock_data) => {
      return (
        <Stock
          eod_stock_data={eod_stock_data}
          deleteStock={() => deleteStock(eod_stock_data._id)}
          key={eod_stock_data._id}
        />
      );
    });
  };

  // This following section will display the table with the eod_stock_datas of individuals.
  return (
    <div>
      <AdminNavbar />
      <Container>
        <Row>
          <Col
            lg={16}
            md={16}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h3>EOD List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>EOD_DATE</th>
                  <th>STOCK_ID</th>
                  <th>OPEN</th>
                  <th>HIGH</th>
                  <th>LOW</th>
                  <th>LAST</th>
                  <th>TECHNICAL_RATING</th>
                  <th>OSCILLATORS_RATING</th>
                  <th>MOVING_AVERAGES_RATING</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{eod_stock_dataList()}</tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default EODStockList;
