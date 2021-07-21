import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import apiRoutes from "./controller";
import connectMongo from "./config/mongo-connect";

const app = express();

// Production environment
const isProduction = process.env.NODE_ENV === "production";
app.use(bodyParser.json());

//https debug
app.use(morgan("dev"));

//Connect Mongo
connectMongo();

app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on isProductions => ${isProduction}`);
  console.log(`Server is running on PORT ${PORT}`);
});
