import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container-fluid page-container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;