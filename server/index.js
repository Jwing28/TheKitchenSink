const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const mongoose = require('mongoose');
const Users = require('./schema/users');
//during development comment this out.
//when something is completed, add this back in.
const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds249249.mlab.com:49249/the-kitchen-sink`;
const devURI = 'mongodb://kitchensink:kitchensink@ds249249.mlab.com:49249/the-kitchen-sink';
const mongodb = require('mongodb');
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    //connect to mongodb on mlab
    mongoose.connect(uri);

    Users.find({}, function(err,users) {
      console.log('can we see the users? ', users);
      res.set('Content-Type', 'application/json');
      res.send(users);
      mongoose.connection.close();
    });
  });

  // All (remaining) requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
