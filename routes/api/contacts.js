const express = require('express')

const controller = require("../../controllers/contacts")
const isValidId = require("../../middlewares/isValidId")

const router = express.Router()

const ctrlWrapper = require("../../helpers/ctrlWrapper")

router.get('/', ctrlWrapper(controller.listContacts))

router.get('/:contactId', isValidId, ctrlWrapper(controller.getContactById))

router.post('/', ctrlWrapper(controller.addContact))

router.delete('/:contactId', isValidId, ctrlWrapper(controller.removeContact))

router.put('/:contactId', isValidId, ctrlWrapper(controller.updateContact))

router.patch('/:contactId/favorite', isValidId, ctrlWrapper(controller.updateStatusContact))

module.exports = router
