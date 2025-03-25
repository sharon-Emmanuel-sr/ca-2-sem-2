const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);
app.use("/api/",Routes);

mongoose.connect(uri)
.then(()=> console.log("MongoDB connected successfully"))
.catch((err)=> {
   console.log("MongoDB connection error: ",err);
})