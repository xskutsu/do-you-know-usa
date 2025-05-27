const port = process.env.PORT ?? "3001";
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.listen(port, () => console.log(`Express listening on port ${port}.`));