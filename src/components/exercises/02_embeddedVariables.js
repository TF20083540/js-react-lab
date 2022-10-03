import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const courseName = "Web App Dev - Modules Table";
  const modules = [
    {
      moduleName: "DevOps",
      noLectures : 2, 
      noPracticals : 2
    },
    {
      moduleName: "Enterprise Web Dev",
      noLectures : 3,
      noPracticals : 2
    }
  ];
  return (

    <div>
          <h1>{courseName}</h1>
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
            <td>{modules[0].moduleName}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].moduleName}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
      

  );

};

export default Demo;
