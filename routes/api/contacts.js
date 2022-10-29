const express = require('express')

const controller = require("../../controllers/contacts")
const isValidId = require("../../middlewares/isValidId")
const authenticate = require("../../middlewares/authenticate")

const router = express.Router()

const ctrlWrapper = require("../../helpers/ctrlWrapper")

router.get('/', authenticate, ctrlWrapper(controller.listContacts))

router.get('/:contactId', authenticate, isValidId, ctrlWrapper(controller.getContactById))

router.post('/', authenticate, ctrlWrapper(controller.addContact))

router.delete('/:contactId', authenticate, isValidId, ctrlWrapper(controller.removeContact))

router.put('/:contactId', authenticate, isValidId, ctrlWrapper(controller.updateContact))

router.patch('/:contactId/favorite', authenticate, isValidId, ctrlWrapper(controller.updateStatusContact))

module.exports = router
