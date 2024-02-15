require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");

// router
const userRoutes2 = require("./routes/users2");
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
const productRoutes = require("./routes/produk");
const logRoutes = require("./routes/logActivity");

const middleWare = require("./middleware/logs");

const app = express();

app.use(cors());

// middleware
app.use(middleWare.logRequest);
app.use(express.json());

// tes
app.use("/tes", userRoutes2);

// users admin xyz
app.use("/users", userRoutes);

// login
app.use("/login", loginRoutes);

// produk
app.use("/products", productRoutes);

// log activity
app.use("/logs", logRoutes);

app.listen(PORT, () => {
  console.log(`server berhasil jalan di port ${PORT}`);
});
