"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const public_routes_1 = __importDefault(require("./routes/public.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// CORS
app.use((req, res, next) => {
    // allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    // set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
    // headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/', public_routes_1.default);
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port} ⚡️`);
});
