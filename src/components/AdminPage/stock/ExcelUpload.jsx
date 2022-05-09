import React, { useState } from "react";
import { useNavigate } from "react-router";
import AdminNavbar from "../AdminNavbar";
import { Col, Container, Row } from "react-bootstrap";
import * as XLSX from "xlsx";
import axios from "axios";

const ExcelUpload = () => {
  const [form, setForm] = useState({
    eod_date: "",
    stock_id: "",
    open: "",
    high: "",
    low: "",
    last: "",
    technical_rating: "",
    oscillators_rating: "",
    moving_averages_rating: "",
  });

  const navigate = useNavigate();
  const dateField = (e) => {
    window.datefield = e.target.value;
  };
  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      // const [jsondata] = convertToJson(data);
      let lines = data.split("\n");
      for (let i = 1; i < lines.length; i++) {
        const currentline = lines[i].split(",");
        const eod_data = {
          eod_date: window.datefield,
          stock_id: currentline[0],
          open: currentline[6],
          high: currentline[7],
          low: currentline[8],
          last: currentline[9],
          technical_rating: currentline[3],
          oscillators_rating: currentline[4],
          moving_averages_rating: currentline[5],
        };
        const stock_data = {
          name: currentline[1],
          code: currentline[0],
          description: currentline[1],
          sector: currentline[2],
          exchange_id: "NSE",
        };
        console.log(
          "eod_data.stock_id",
          eod_data.stock_id,
          eod_data.stock_id.trim !== ''
        );
        if (eod_data.stock_id.length > 1) {
          fetchStock(stock_data);
          addEODdata(eod_data);
        }
      }
      navigate("/eodstockdata");
      async function fetchStock(stock_data) {
        console.log("stock_data", stock_data);
        const code = stock_data.code;
        console.log(code);
        const response = await fetch(
          `http://localhost:5000/stock/stock_exists/${stock_data.code}`
        );
        console.log(response);
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }

        const record = await response.json();
        console.log("record", record, stock_data);
        if (record.length === 0) {
          addStock(stock_data);
          return;
        }
      }
      async function addStock(stock_data) {
        console.log("stock_data", stock_data);
        e.preventDefault();
        await axios
          .post("http://localhost:5000/stock/add", stock_data)

          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }

      async function addEODdata(eod_data) {
        e.preventDefault();
        console.log(eod_data);

        // When a post request is sent to the create url, we'll add a new record to the database.

        await axios
          .post("http://localhost:5000/eod_stock_data/add", eod_data)
          .then((res) => {
            console.log(res.message);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    };

    reader.readAsBinaryString(file);
    function convertToJson(csv) {
      let lines = csv.split("\n");

      let result = [];

      let headers = lines[0].split(",");

      for (let i = 1; i < lines.length; i++) {
        let obj = {};
        let currentline = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }

      //return result; //JavaScript object
      return JSON.stringify(result); //JSON
    }
  };

  return (
    <div>
      <AdminNavbar />
      <Container>
        <Row>
          <Col
            xs={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          ><h3>Upload Excel File</h3>
            <input type="date" onChange={dateField} />
            <br></br>
            <br></br>
            <input type="file" onChange={onChange} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ExcelUpload;
