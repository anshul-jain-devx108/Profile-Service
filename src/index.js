const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0",() => console.log(`🚀 Server running on port ${PORT}`));
