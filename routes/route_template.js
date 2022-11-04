// Import Packages
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const errorhandler = require('errorhandler');
const path = require('path');
const lowercasePaths = require('express-lowercase-paths');
const responseTime = require('response-time');

// Import Helper class
const showNotification = require('./helper/showNotification');

// Express App Config
const app = express();

// App settings
app.set('json spaces', 3);

// Defining Middlewares
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use(lowercasePaths());
app.use(express.json());
app.use(responseTime());
app.use(
	express.urlencoded({
		extended: true,
	})
);

if (process.env.NODE_ENV === 'development')
	app.use(errorhandler({ log: showNotification }));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', (req, res) => res.status(200).json({ path: '/' }));

module.exports = app;
