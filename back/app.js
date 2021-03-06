const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const authRouter = require('./routes/auth/auth');
const dataRouter = require('./routes/data/data');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/data', dataRouter);

app.get('/', (req, res) => {
	res.send("je suis dans /")
})

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

let server = app.listen(process.env.PORT || 4000, function () {
	console.log('Listening on port ' + server.address().port);
});