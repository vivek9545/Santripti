import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    axios
      .get(`${backendUrl}/`)
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
