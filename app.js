"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.set("port", PORT);
app.get("/", ((req, res, next) => {
    try {
        res.send("<h1>Hello TypeScript Express</h1>");
    }
    catch (err) {
        next(err);
    }
}));
app.listen(app.get("port"), () => {
    console.log("server is open");
});
