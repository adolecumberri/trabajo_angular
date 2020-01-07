const express = require("express");
const router = express.Router();
const controller = require("../controllers/moviesController");

router.get("/home", controller.getMoviesHome);
router.post("/home", controller.addMovies);
router.get("/:userId", controller.getMovies);
router.get("/details/:movieId", controller.getMovie);
router.post("/:userId/addmovie", controller.addMovie);

module.exports = router;