import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = props => {
  const list = props.modules.map((module, index) => {
  return (
    <tr key={index}>
      <td>{module.name}</td>
      <td>{module.noLectures}</td>
      <td>{module.noPracticals}</td>
    </tr>
    );
  });
  return (
    <div>
    <h1>{props.course}</h1>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No Lectures</th>
          <th>No Practicals</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
    </div>
  );
};

export default Demo;
