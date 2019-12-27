const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

router.get("/:userId", controller.getUser);
router.post("/:userId", controller.updateUser);
router.post("/", controller.postUser);

module.exports = router;