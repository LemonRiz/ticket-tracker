import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";
import Searchbox from "./components/Searchbox/Searchbox";
import { React, useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // filter employees based on search term from searchbox
  const filteredEmployee = team.filter((person) => {
    const filteredLower = person.name.toLowerCase();
    return filteredLower.includes(searchTerm);
  });
  console.log(filteredEmployee);
  const people = filteredEmployee.map((person, index) => {
    return <Employee name={person.name} role={person.role} key={index + 1} />;
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <h2>Search by Employee Name</h2>
        <Searchbox
          label={"Employee"}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <div className="tickets">{people}</div>
      </header>
      <div className="searchbox"></div>
    </div>
  );
};

export default App;
