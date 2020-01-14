const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

router.get('/data', (req, res) => {
	connection.query('SELECT * from mytable', (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send("Erreur");
		} else {
			res.json(results);
		}
	});
});

module.exports = router;