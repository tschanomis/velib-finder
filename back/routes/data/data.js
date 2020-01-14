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

router.post('/data', (req, res) => {
	const lat = req.body.lat;
	const lon = req.body.lon;
	connection.query(`SELECT Nom_de_la_station, geo, Nombre_vélo_électrique, Nombre_de_vélo_mécanique, get_distance_metres(?, ?, SUBSTRING_INDEX(geo, ',', 1), SUBSTRING_INDEX(SUBSTRING_INDEX(geo, ',', 2), ',', -1)) AS distance FROM mytable ORDER BY distance ASC LIMIT 20`, [lat, lon], (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send("Erreur");
		} else {
			res.json(results);
		}
	});
});

module.exports = router;