// const { styleText } = require('node:util')
// process.loadEnvFile()

// console.log(styleText("bold", styleText("red", process.env.API_KEY)));
// console.log(styleText("underline", styleText("magenta", process.env.DB_HOST)));
// console.log(styleText("cyan", process.env.DB_HOST_USER));
// console.log(styleText("green", process.env.PASSWORD));
import express from 'express';
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", authRoutes)

export default app;