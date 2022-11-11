const express = require('express')

const controller = require("../../controllers/auth")

const {ctrlWrapper} = require("../../helpers")
const validateBody = require("../../middlewares/validateBody")
const authenticate = require("../../middlewares/authenticate")
const upload = require("../../middlewares/upload")

const { authSchema } = require("../../models/user")
const {verifyEmailSchema}  = require("../../models/user")

const router = express.Router()

router.post("/signup", validateBody(authSchema), ctrlWrapper(controller.register))

router.get("/verify/:verificationToken", ctrlWrapper(controller.verify));

router.post("/verify", validateBody(verifyEmailSchema), ctrlWrapper(controller.resendEmail))

router.post("/login", validateBody(authSchema), ctrlWrapper(controller.login))

router.get("/current", authenticate, ctrlWrapper(controller.getCurrent))

router.get("/logout", authenticate, ctrlWrapper(controller.logout))

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(controller.updateAvatar))

module.exports = router