import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";
import Searchbox from "./components/Searchbox/Searchbox";
import { React, useState } from "react";

const App = () => {
  const people = team.map((person) => {
    return <Employee name={person.name} role={person.role} />;
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <div className="tickets">{people}</div>
      </header>
      <div className="searchbox">
        <h2>Search by Employee Name</h2>
        <Searchbox
          label={"Employee"}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
};

export default App;
