const express = require('express');
const router = express.Router();

const controller = require("../controllers/controller")

router.get('/', controller.showAll);
router.get('/:id', controller.showById);
router.post('/', controller.insert);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

module.exports = router;