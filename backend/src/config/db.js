// backend/src/config/db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

// 👇 Force IPv4 resolution (important for Render + Supabase)
dns.setDefaultResultOrder("ipv4first");

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name
  process.env.DB_USER,      // Username
  process.env.DB_PASSWORD,  // Password
  {
    host: process.env.DB_HOST, // e.g. db.<project>.supabase.co
    dialect: "postgres",
    port: 5432,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Supabase needs SSL
      },
      connectTimeout: 60000, // helpful on Render cold starts
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit process if DB fails
  }
};

export { sequelize, connectDB };
