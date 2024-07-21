const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const app = express();
const getConnection = require('./config');
const router = require('./router');
const cors = require('cors');

dotenv.config();

app.use(express.json());
app.use(cors());

// Swagger documentation
const ui = require('swagger-ui-express');
const doc = require('./swagger-output.json');
app.use('/api-docs', ui.serve, ui.setup(doc));

// API routes
app.use('/api/v1/', router);

// Load the SSL certificate and key
// const sslOptions = {
//   key: fs.readFileSync('/etc/ssl/private/selfsigned.key'),
//   cert: fs.readFileSync('/etc/ssl/certs/selfsigned.crt')
// };

// HTTP redirect to HTTPS (optional but recommended)
// const http = require('http');
// http.createServer((req, res) => {
//   console.log(`Location:https://${req.headers['host']}${req.url}`);
//   res.writeHead(301, { 'Location': `https://${req.headers['host']}${req.url}` });
//   res.end();
// }).listen(80);

const PORT = process.env.PORT || 443; // Default to 443 for HTTPS
getConnection()
  .then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running securely on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });
