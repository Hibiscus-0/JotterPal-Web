import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAccount from "./pages/LoginAccount";
import ForgotPassword from "./pages/ForgotPassword"; // Import the ForgotPassword component
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
      </Routes>
    </Router>
  );
}

export default App;