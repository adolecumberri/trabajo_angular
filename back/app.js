const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const port = 5000;
const app = express();
const cors = require('cors');
app.use(cors());

/* MIDDLEWARE */
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* ROUTER */
const usersRouter = require('./routes/users')
const moviesRouter = require('./routes/movies')
app.use('/', usersRouter);
app.use('/movies', moviesRouter);

app.listen(port, ()=> console.log(`app on port ${port}`));