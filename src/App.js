import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Table from "./Table";
import TableAll from "./TableAll";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          {/* <Header /> */}
          <Routes>
            <Route path="/showAll" element={<TableAll />} />
            <Route path="/" element={<Table />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
