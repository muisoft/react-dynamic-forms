require('dotenv').config();
const { createServer } = require('http');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require( 'mongoose');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 50000);

require('./server/models')(process.env.LOCAL_DB_CONN);

const app = express();
const dev = app.get('env') !== 'production';

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }));


const router = require('./server/routes/router');
app.use(router);

// Check if we are on Production
if(!dev){
  app.disable('x-powered-by');
  app.use(morgan('common'));
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
const server = createServer(app);
server.listen(PORT, err => {
  if(err) throw err;
  console.log('Server started'); 
})
