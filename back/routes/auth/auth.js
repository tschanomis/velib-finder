const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const connection = require('../../helpers/db');
const jwtSecret = require('../../jwtSecret');

router.get('/login', (req, res) => {
	connection.query('SELECT Nom_de_la_station from mytable', (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send("Erreur");
		} else {
			res.json(results);
		}
	});
});  

router.post('/login', (req, res) => {
	if (req.body.email === "email@gmail.com" && req.body.password === "password") {
		console.log("Login ok")
		const tokenUserInfo = {
			email: req.body.email,
			status: "status"
		};
		const token = jwt.sign(tokenUserInfo, jwtSecret);
		res.header("Access-Control-Expose-Headers", "x-access-token")
		res.set("x-access-token", token)
		res.status(200).send("user connected")
	}
})

module.exports = router;