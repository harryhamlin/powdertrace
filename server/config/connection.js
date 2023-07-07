const { connect, connection } = require('mongoose');

connect('mongodb://localhost/powdertrace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;