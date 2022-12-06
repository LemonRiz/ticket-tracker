import "./App.scss";
import { React, useState } from "react";
import team from "./data/team";
import Employee from "./components/Employee/Employee";
import Searchbox from "./components/Searchbox/Searchbox";
import Dropdown from "./components/Dropdown/Dropdown";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleSelector = (event) => {
    setSelectedRole(event.target.value);
  };

  // filter employees based on search term from searchbox
  const filteredEmployee = team.filter((person) => {
    const filteredLower = person.name.toLowerCase();
    return filteredLower.includes(searchTerm);
  });
  const people = filteredEmployee.map((person, index) => {
    return <Employee name={person.name} role={person.role} key={index + 1} />;
  });

  const filteredRoles = team.filter((person) => {
    return person.role.includes(selectedRole);
  });
  console.log(filteredRoles);

  return (
    <div className="app">
      <header className="greeting">
        <div className="searchbox">
          <h1 className="greeting__heading">Ticket Tracker</h1>
          <h2>Search by Employee Name</h2>
          <Searchbox
            label={"Employee"}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />{" "}
          <Dropdown
            label={"Role"}
            selectedRole={selectedRole}
            handleSelector={handleSelector}
          />
        </div>
        <div className="tickets">{people} </div>
      </header>
    </div>
  );
};

export default App;
