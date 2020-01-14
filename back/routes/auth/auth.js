const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('../../helpers/db');


router.post('/signup', (req, res) => {
	const email = req.body.email
	const password = req.body.password
	connection.query('INSERT INTO user (email, password) VALUES (?,?)', [email, password], (err, result) => {
		if (err) {
			res.status(500).json({ flash: "erreur" })
		} else {
			res.status(200).json({ flash: "Vous êtes enregistré" })
		}
	})
})

router.post('/signin', (req, res) => {
	const email = req.body.email
	const password = req.body.password
	connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, result) => {
		if (err) {
			res.status(500).json({ flash: "erreur" })
		} else {
			res.status(200).json({ flash: "connecté" })
		}
	})
})
module.exports = router


