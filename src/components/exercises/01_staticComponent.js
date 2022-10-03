import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";



const Demo = () => {

  return (

    <div>
          <h1>Web App Dev - Modules Table</h1>
          <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No Lectures</th>
            <th>No Practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DevOps</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Enterprise Web Dev</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
      

  );

};

export default Demo;
