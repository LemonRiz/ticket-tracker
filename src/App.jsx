import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";
import Searchbox from "./components/Searchbox/Searchbox";

const App = () => {
  const people = team.map((person) => {
    return <Employee name={person.name} role={person.role} />;
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <div className="tickets">{people}</div>
      </header>
      <div className="Searchbox">
        <h2>Search by Employee Name</h2>
        <Searchbox />
      </div>
    </div>
  );
};

export default App;
