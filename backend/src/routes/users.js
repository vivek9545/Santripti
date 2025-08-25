import express from "express";
import { supabase } from "../config/supabase.js";

const router = express.Router();

// Example: get users from Supabase Auth
router.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase.auth.admin.listUsers();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
