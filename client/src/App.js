import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Master from "./Master";

import ViewContactMessage from "./viewContactMessage/ViewContactMessage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/contact" element={<ViewContactMessage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
