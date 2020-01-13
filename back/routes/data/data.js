const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

/*router.get('/data', (req, res) => {
	connection.query('SELECT Nom_de_la_station, geo from mytable', (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send("Erreur");
		} else {
			res.json(results);
		}
	});
});*/

router.post('/data', (req, res) => {
	const latForm = req.body.lat;
	const lonForm = req.body.lon;
	console.log(latForm, lonForm);
	connection.query('SELECT Nom_de_la_station, geo from mytable', (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send("Erreur");
		} else {
			res.json(results);
		}
	});
});

module.exports = router;