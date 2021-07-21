import express from "express";
import authService from "../service/auth";
import { asyncWrapper } from "/../utils/asyncWrapper";
import userController from "../module/crud/crud.controller";

const auth = express.Router();

// Create
auth.post("/login", asyncWrapper(userController.login));

export { auth };