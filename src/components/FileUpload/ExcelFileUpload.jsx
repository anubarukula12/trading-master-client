import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../Utils/css/styles.css";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
const ExcelFileUpload = () => {
  let excelrowvalues = [];
  let data = [];
  const [excelcols, setExcelCols] = useState([]);
  const [excelrows, setExcelrows] = useState([]);
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setExcelCols(resp.cols);
        setExcelrows(resp.rows);
        window.excelrowvalues = Object.assign({}, resp.rows);
        let rowvalues = [];
        rowvalues = window.excelrowvalues;
        console.log(1, rowvalues);
        for (let i = 1; i < rowvalues.length; i++) {
          rowvalues = rowvalues[i];
          console.log(2);
        }
        console.log(3);
        console.log("the indexmof", rowvalues);

        console.log("the data in file handler", window.excelrowvalues);
      }
    });
  };
  const renderFile = () => {
    const data = window.excelrowvalues;
    const excelvalues = Object.values(data);
    console.log("the result value is", excelvalues);
    axios
      .post("http://localhost:5000/display", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        excelvalues,
      })

      .then((res) => {
        console.log("the res data in then method", res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <input
            type="file"
            className="px-5"
            style={{ size: "600" }}
            onChange={fileHandler}
          />
          {/* <button className="btn btn-outline-primary" onClick={renderFile}>
            Upload
          </button> */}

          <Button
            variant="primary"
            className="form-control mt-4"
            onClick={renderFile}
          >
            Upload
          </Button>
        </Col>
      </Row>
      <OutTable
        data={excelrows}
        columns={excelcols}
        tableClassName="table mt-4"
        tableHeaderRowClass="heading"
      />
    </Container>
  );
};
export default ExcelFileUpload;
