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

  const filteredRoles = team.filter((person) => {
    return person.role.includes(selectedRole);
  });

  // filter employees based on search term from searchbox
  const filteredEmployee = team.filter((person) => {
    const filteredLower = person.name.toLowerCase();
    return (
      filteredLower.includes(searchTerm) && person.role.includes(selectedRole)
    );
  });
  console.log(filteredEmployee);

  const people = filteredEmployee.map((person) => {
    return <Employee name={person.name} role={person.role} key={person.id} />;
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">
          <marquee>Ticket Tracker</marquee>
        </h1>
        <h2>Search by Employee Name</h2>
        <div className="searchbox">
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
        <div className="tickets">{people}</div>
      </header>
    </div>
  );
};

export default App;
