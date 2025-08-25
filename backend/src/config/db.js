import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 6543, // Pooler port
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false }, // Supabase needs SSL
  },
  pool: {
    max: 5,          // don’t keep too many
    min: 0,          // allow 0 idle
    idle: 10000,     // close idle after 10s (important for pooler)
    acquire: 30000,  // timeout before throwing error
  },
  logging: false,    // set true if debugging
});

export default sequelize;
