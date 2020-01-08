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
  const { username, password, email, user_id } = req.body;
console.log(req.body);
  const sql = `UPDATE users SET username = '${username}', password= sha1('${password}'), email = '${email}' 
  WHERE user_id = '${user_id}'`;
  console.log(sql);
  connection.query( sql,
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
};
//ruta para añadir un usuario nuevo
controller.postUser = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email.includes('@'));
  let sql = `INSERT INTO users SET ${email.includes('@') ? 'email' : 'username'} = '${email}', password= sha1('${password}');`;

  connection.query(sql,
    (err, results) => {
      if (err) {
        if (err.errno == 1062) {
          res.send("user already exists in the database");
        } else {
          res.send(err);
        }
      } else {
        connection.query(`SELECT * FROM users WHERE user_id = '${results.insertId}'`,
          (err, results2) => {
            if(err) throw err;
            console.log("por akí sin errores ");
            console.log(results2);
            res.send(results2[0]);
          }
        );
      }
    }
  );
};




module.exports = controller;