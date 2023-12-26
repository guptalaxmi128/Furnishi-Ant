import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FactoryManagerLayout from "./components/factoryManagerLayout/FactoryManagerLayout";
import "./App.css";
import Login from "./components/login/Login";
import EmailOtp from "./components/login/emailOtp/EmailOtp";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<EmailOtp />} />
          <Route path="/factory/*" element={<FactoryManagerLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
