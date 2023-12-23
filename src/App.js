import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FactoryManagerLayout from "./components/factoryManagerLayout/FactoryManagerLayout";
import "./App.css";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/factory/*" element={<FactoryManagerLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
