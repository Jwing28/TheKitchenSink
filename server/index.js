const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users = require('./schema/users');
//bcrypt for user authentication: salting and hashing
var bcrypt = require('bcrypt');
const saltRounds = 10; //difficulty lvl to brute force the hash
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
  // data must be run through body parser to populate req.body
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  mongoose.connect(devURI);

  app.post('/login', (req, res) => {
    Users.find({ username: req.body.username }, (err, userArray) => {
      if (err) throw new Error(err)
      if(userArray.length) {
        let userPassword = userArray.filter((userArray) => userArray.username === req.body.username)[0].password;

        bcrypt.compare(req.body.password, userPassword).then((passwordsMatch) =>  {
            if(passwordsMatch) {
              const user = userArray[0];
              res.send({ username: user.username, favorites: user.favorites});
            } else {
              res.send({ error: 'Incorrect password'});
            }
        })
        .catch((err) => console.log(`Error comparing passwords: ${err}`));
      } else {
        res.send({ error: 'User not found'})
      }
      mongoose.connection.close();
    });
  });

  // All (remaining) requests return the React app, so it can handle routing.
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, () => {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
