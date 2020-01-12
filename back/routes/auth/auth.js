const express = require('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const jwtSecret = require('../jwtSecret')

router.get('/login', (req, res) => {
	res.send("je suis dans auth");
})

router.post('/login', (req, res) => {
	if (req.body.email === "email@gmail.com" && req.body.password === "password") {
		console.log("Login ok");
		res.send(req.body);
		const tokenUserInfo = {
			email: req.body.email,
			status: "status"
		}
		console.log(jwtSecret);
		const token = jwt.sign(tokenUserInfo, jwtSecret);
	}
})

module.exports = router;