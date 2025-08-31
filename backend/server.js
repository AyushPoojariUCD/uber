// HTTP Module
const http = require('http');  

// Express App
const app = require('./app');   

// Initializing Socket
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

// Creating an HTTP server using the Express app
const server = http.createServer(app);

// Initialize Socket.IO and attach it to the HTTP server
initializeSocket(server);

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Uber Backend Server is running on port ${PORT}`);
});
