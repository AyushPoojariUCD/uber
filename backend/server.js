const http = require('http');

const app = require('./app');

const connectDB = require('./db/db');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

connectDB();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Uber Backend running on http://localhost:${PORT}`);
});
