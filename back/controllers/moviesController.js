const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "movies"
});
const controller = {};
const msg = "ERROR";

// controller.getMovies = (req, res) => {
//   const { userId } = req.params;

//   connection.query(`SELECT title,director, main_actor, release_date FROM movies 
//   LEFT JOIN user_movie ON movies.movie_id = user_movie.movie_id 
//   WHERE user_movie.user_id = '${userId}'`,
//     (err, results) => {
//       if (err) res.send(msg)
//       res.send(results);
//     }
//   );
// };

controller.getMovies = (req, res) => {
  const { userId } = req.params;

  connection.query(`SELECT title, img, category, status FROM movies 
  LEFT JOIN user_movie ON movies.movie_id = user_movie.movie_id 
  WHERE user_movie.user_id = '${userId}'`,
    (err, results) => {
      if (err) res.send(msg)
      res.send(results);
    }
  );
};

controller.getMovie = (req, res) => {
  const movieId = req.params.movieId;

  connection.query(`SELECT title, director, main_actor, release_date FROM movies
    WHERE movie_id = '${movieId}'`,
    (err, results) => {
      if (err) res.send(msg)
      res.send(results);
    });
};

controller.addMovie = (req, res) => {
  const { userId } = req.params;
  const title = req.body;

  connection.query(`SELECT movie_id FROM movies WHERE title = '${title.title}' `,
    (err, results) => {
      if (err) console.log(err)
      const movieId = results[0].movie_id;
      connection.query(`INSERT INTO user_movie (user_id, movie_id) 
      VALUES('${userId}', '${movieId}')`,
        (err, results2) => {
          if (err) console.log(err)
          res.send(`movie ${title.title} added to your collection`)
        }
      );
    });
}

module.exports = controller;