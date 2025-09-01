// Setup Express
const express = require('express');

// Setup Dotenv
const dotenv = require('dotenv');
dotenv.config();

// CORS
const cors = require('cors');

// APP:: Express
const app = express();

// Cookie Parser
const cookieParser = require('cookie-parser');

// Connecting Database: MongoDB
const connectToDb = require('./db/db');
connectToDb();

// Routes
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

// Middleware Functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Route Setup
app.get('/', (req, res) => {
    res.send('Uber Backend is Running');
});

// Mounting Routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;
