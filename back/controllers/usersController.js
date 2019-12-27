const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "movies"
});
const controller = {};

//ruta para obtener un usuario, pasando el user id por params
controller.getUser = (req, res) => {
  const { userId } = req.params;
  connection.query(`SELECT user_id, username FROM users WHERE user_id = '${userId}'`,
    (err, results) => {
      res.send(results)
    }
  );
};
//ruta para actualizar un usario pasandole el id por params y el nuevo username y password 
//a traves del body
controller.updateUser = (req, res) => {
  const { userId } = req.params;
  const { email, name, surname, password } = req.body;

  connection.query(`UPDATE users SET email = '${email}', name = '${name}',
  surname= '${surname}', password= sha1('${password}') WHERE user_id = '${userId}'`,
    (err, results) => {
      if (err) console.log(err);
      connection.query(`SELECT email, name, surname, password FROM users WHERE user_id = '${userId}'`,
        (err, results2) => {
          if (err) console.log(err)
          const msg = `user ${name} ${surname} updated`
          res.send(msg)
        }
      );
    }
  );
};
//ruta para añadir un usuario nuevo
controller.postUser = (req, res) => {
  const { email, name, surname, password } = req.body;

  connection.query(`INSERT INTO users (email, name, surname, password)
   VALUES('${email}','${name}', '${surname}', sha1('${password}'))`,
    (err, results) => {
      if (err) {
        if (err.errno == 1062) {
          res.send("user already exists in the database");
        } else {
          console.log(err)
          res.send("an unknown error ocurred");
        }
      } else {
        connection.query(`SELECT email FROM users WHERE user_id='${results.insertId}'`,
          (err, results2) => {
            if (err) console.log(err)
            res.send(`you have added the user: ${results2[0].email}`)
          }
        );
      }
    }
  );
};




module.exports = controller;