"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.set("port", process.env.PORT);
app.get("/", (req, res, next) => {
    res.send("<h1>Hello world</h1>");
});
app.listen(app.get("port"), () => {
    console.log("server is open");
});
