// backend/src/server.js
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB(); // DB connection handled here
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
})();
