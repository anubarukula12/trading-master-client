import React, { createRef, useState } from "react";
import axios from "axios";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
const ExcelFileUpload = () => {
  let excelrowvalues=[];
  let data=[];
  const[excelcols,setExcelCols]=useState([])
  const[excelrows,setExcelrows]=useState([])
  const fileHandler = (event) => {
    let fileObj=event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
            setExcelCols(resp.cols);
            setExcelrows(resp.rows);
        window.excelrowvalues= Object.assign({},resp.rows);
       console.log("the data in file handler",window.excelrowvalues);
  };
})
  }
  const renderFile = () => {
   const data= window.excelrowvalues
  
    const excelvalues=Object.values(data)
    // console.log("the headers is",headervalues)
    // //const header=headervalues.split(',');
    // console.log("header is",Object.keys(data).length)
  //    for(let i=1;i<Object.keys(data).length;i++){
  //      let obj={};
         
  //   for(let j = 0; j<headervalues.length; j++) {
  //      headervalues[j] = headervalues[j].split(",");
  //      obj[headervalues[j]]=currentline[j]
  //   }
  //   result.push(obj)
  // }
  //  const datavalues=JSON.stringify(result)
    console.log("the result value is",excelvalues)
  axios
       .post("http://localhost:5000/display",{
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },excelvalues
       })
 
       .then(res => {
           console.log("the res data in then method",res.data)
        
       })
       .catch((error) => {
         if(error.response){
           console.log(error.response.data);
         }

       });
        
     

    }



  return (
    <div>
      <div className="m-3">
        <input type="file" onChange={fileHandler} />
        <button className="btn btn-outline-primary" onClick={renderFile}>
      Upload</button>
      {/* <OutTable data={excelrows} columns={excelcols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />  */}
      </div>
    </div>
  );
};
export default ExcelFileUpload;
