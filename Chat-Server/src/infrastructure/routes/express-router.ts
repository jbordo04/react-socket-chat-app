import express, { NextFunction } from "express"
import * as userController from "../controllers/user.controller"
import { auth } from "../middlware/auth"

const router = express.Router()

router.post("/login", userController.loginOne)

router.post("/logout", userController.logoutOne)

router.post("/register", userController.registerOne)

router.get("/chat/:owner/:with", userController.chatOne)
router.post("/chat/:owner/:with", userController.createChatOne)
// router.get("/chat/:user", auth, userController.chatOne)

router.get("/search/:query", userController.searchOne)

export default router
