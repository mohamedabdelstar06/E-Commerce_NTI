import express from "express";
import dotenv from "dotenv";
import dbConnection from "./src/config/database";
import mountRoutes from "./src";

const app: express.Application = express();
app.use(express.json({ limit: "10kb" }));
dotenv.config();
dbConnection();
mountRoutes(app);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
