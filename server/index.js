const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
//during development comment this out.
//when something is completed, add this back in.
const uri = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds249249.mlab.com:49249/the-kitchen-sink`;
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

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {

    //connect to mongodb db on mlab
    //this will be put inside one of the api routes
    mongodb.MongoClient.connect(uri, (err, client) => {
      let db = client.db('the-kitchen-sink');

      db.collection('users').findOne({}, (findErr, doc) => {
        if(findErr) throw findErr
        console.log('docs: ', doc);
        res.set('Content-Type', 'application/json');
        res.send(doc);
        client.close();
      })
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
