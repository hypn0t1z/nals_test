import express from "express";
import eventService from "../service/event";
import { asyncWrapper } from "/../utils/asyncWrapper";

const event = express.Router();

// Create
event.post("/create", asyncWrapper(eventService.register));

// GetAll Data
event.get("/events", asyncWrapper(eventService.findAll));

// GetBy ID
event.get("/users/:userId", asyncWrapper(eventService.findOne));

// update by ID
event.put("/events/:eventId", asyncWrapper(eventService.update));

// Delete
event.delete("/events/:eventId", asyncWrapper(eventService.delete));

export { event };