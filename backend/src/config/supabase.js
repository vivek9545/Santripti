// backend/src/config/supabase.js
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL,       // e.g. https://xyzcompany.supabase.co
  process.env.SUPABASE_ANON_KEY    // your anon or service role key
);
