const express = require('express');
const cors = require('cors');

const connect = require("./db");
const routes = require("./routes/index");

const PORT = 5000;

const app = express();

// middlewares
app.use(cors());

connect();

// routes
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})