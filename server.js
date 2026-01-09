const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
