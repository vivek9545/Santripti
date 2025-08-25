// // backend/src/server.js
// import app from "./app.js";
// import { connectDB } from "./config/db.js";

// const PORT = process.env.PORT || 5000;

// (async () => {
//   try {
//     await connectDB(); // DB connection handled here
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//   } catch (error) {
//     console.error("❌ Server failed to start:", error);
//     process.exit(1);
//   }
// })();


// backend/src/server.js
import express from "express";
import { supabase } from "./config/supabase.js";

const app = express();
app.use(express.json());

// Example route: fetch all users from Supabase table
app.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users") // replace with your table name
      .select("*");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("Supabase query failed:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
