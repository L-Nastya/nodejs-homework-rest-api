const express = require('express')

const controller = require("../../controllers/auth")

const ctrlWrapper = require("../../helpers/ctrlWrapper")
const validateBody = require("../../middlewares/validateBody")
const authenticate = require("../../middlewares/authenticate")

const {authSchema} = require("../../models/user")

const router = express.Router()

router.post("/signup", validateBody(authSchema), ctrlWrapper(controller.register))

router.post("/login", validateBody(authSchema), ctrlWrapper(controller.login))

router.get("/current", authenticate, ctrlWrapper(controller.getCurrent))

router.get("/logout", authenticate, ctrlWrapper(controller.logout))

module.exports = router