const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const jwtSecret = require('../../jwtSecret');

router.get('/login', (req, res) => {
	res.send("je suis dans auth");
})

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