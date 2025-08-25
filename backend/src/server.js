import express from "express";
import cors from "cors"; // ✅ import cors
import { supabase } from "./config/supabase.js";

const app = express();
app.use(express.json());

// ✅ Enable CORS for frontend
// Replace '*' with your frontend URL in production
app.use(cors({
  origin: "https://santripti.vercel.app/" // e.g., "https://your-frontend.vercel.app"
}));

// ✅ Root route
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "🚀 Backend is live!"
  });
});

// ✅ Example route: fetch all users from Supabase table
app.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users") // replace with your table name
      .select("*");

    if (error) throw error;

    res.json({
      status: "success",
      data
    });
  } catch (err) {
    console.error("Supabase query failed:", err.message);
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

// ✅ Catch-all 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found"
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
