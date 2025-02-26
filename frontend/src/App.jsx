import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import LoginAccount from "./pages/LoginAccount"; // Import the LoginAccount component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the CreateAccount page */}
        <Route path="/" element={<CreateAccount />} />

        {/* Route for the LoginAccount page */}
        <Route path="/login" element={<LoginAccount />} />
      </Routes>
    </Router>
  );
}

export default App;