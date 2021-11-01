import express from "express";
import { createNewUser, getUser,getOneUser,deleteUser,patchUser } from "../controllers/users.js";
const router = express.Router()

//all routes her are staring with /users

let users = []

router.get("/" ,getUser)
router.post("/", createNewUser)

//the value of the id is store in req.params
router.get("/:id",getOneUser)

//delete route
router.delete("/:id",deleteUser)

//PUT is used to completely Overwrite wheras PATCH is used for partial overwrite
router.patch("/:id", patchUser)

export default router