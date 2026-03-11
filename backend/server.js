const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
app.get("/", (req, res) => {
  res.send("HouseHunt backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});