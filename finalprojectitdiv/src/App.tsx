import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./views/Calculator";
import Support from "./views/SupportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
