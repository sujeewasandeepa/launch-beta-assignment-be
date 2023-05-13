const express = require('express');

const connect = require("./db");
const routes = require("./routes/index");

const PORT = 5000;

const app = express();

connect();

// routes
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})