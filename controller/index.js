import express from "express";
import { event } from "./event";

const apiRoutes = express.Router();

apiRoutes.get("/", function(req, res, next) {
    res.json({ message: "from index api" });
});

apiRoutes.use("/event", event);

export default apiRoutes;