import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

export default app;
