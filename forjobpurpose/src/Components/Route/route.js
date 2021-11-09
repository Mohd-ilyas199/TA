import express from "express"
import { getusers } from "../controller/user-controller.js";
const route=express.Router()

route.get("/",getusers)

export default route;