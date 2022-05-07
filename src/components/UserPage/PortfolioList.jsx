import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashBoard from "./DashBoard";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moment from 'moment';
const Portfolio = (props) => (
  <tr>
    <td>{props.portfolio.code}</td>
    <td>{props.portfolio.purchase_price}</td>
    <td>{props.portfolio.purchase_quantity}</td>
    <td>{props.portfolio.sale_price}</td>
    <td>{props.portfolio.sale_quantity}</td>
    <td>{moment(props.portfolio.purchase_date).format('DD-MMM-YYYY')}</td>
   
    <td>{isNaN(props.portfolio.sale_date) ? moment(props.portfolio.sale_date).format('DD-MMM-YYYY'): ''}</td>
    <td>
      <Link
        className="btn btn-link"
        to={`/portfolio_stock/edit/${props.portfolio._id}`}
      >
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deletePortfolio(props.portfolio._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function PortfolioList() {
  const [portfolios, setPortfolios] = useState([]);

  // This method fetches the portfolios from the database.
  useEffect(() => {
    async function getPortfolios() {
      const id = localStorage.getItem("user_id");
      await axios
        .get(`http://localhost:5000/portfolio/${id}`)
        .then((res) => {
          const portfolios = res.data;
          setPortfolios(portfolios);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    getPortfolios();

    return;
  }, [portfolios.length]);

  // This method will delete a portfolio
  async function deletePortfolio(id) {
    await fetch(`http://localhost:5000/portfolio/delete/${id}`, {
      method: "DELETE",
    });

    const newPortfolios = portfolios.filter((el) => el._id !== id);
    setPortfolios(newPortfolios);
  }

  // This method will map out the portfolios on the table
  function portfolioList() {
    return portfolios.map((portfolio) => {
      return (
        <Portfolio
          portfolio={portfolio}
          deletePortfolio={() => deletePortfolio(portfolio._id)}
          key={portfolio._id}
        />
      );
    });
  }

  // This following section will display the table with the portfolios of individuals.
  return (
    <div>
      <DashBoard />
      <Container>
        <Row>
          <Col
            lg={16}
            md={16}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h3>Portfolio List</h3>
            <LinkContainer to="/addportfolio">
              <Button> Add Stock Portfolio </Button>
            </LinkContainer>

            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Buy Price</th>
                  <th>Buy Quantity</th>
                  <th>Sell Price</th>
                  <th>Sell Quantity</th>
                  <th>Buy Date</th>
                  <th>Sell Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{portfolioList()}</tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
