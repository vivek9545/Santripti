import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import "./App.css";

// Pages
function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  axios.get(`${backendUrl}/`)
    .then(res => setMessage(res.data.message))
    .catch(() => setMessage("Error connecting to backend"));
}, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />

      {/* routing to different sections */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;
