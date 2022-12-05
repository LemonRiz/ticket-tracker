import React from "react";
import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = (props) => {
  const { name, role } = props;
  console.log(props);

  return (
    <div className = "card">
      <p className= "details">{name}</p>
      <p className= "details">{role}</p>
      <Counter />
    </div>
  );
};

export default Employee;
