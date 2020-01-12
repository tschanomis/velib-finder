const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

router.get('/login', (req, res) => {
	res.send("je suis dans auth")
})

router.post('/login', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

module.exports = router;