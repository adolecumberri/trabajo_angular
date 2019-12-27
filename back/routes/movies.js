const express = require("express");
const router = express.Router();
const controller = require("../controllers/moviesController");

router.get("/:userId", controller.getMovies);
router.get("/details/:movieId", controller.getMovie);
router.post("/:userId/addmovie", controller.addMovie);

module.exports = router;