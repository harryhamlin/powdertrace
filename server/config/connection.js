const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/powdertrace"
);

module.exports = mongoose.connection;


// const { connect, connection } = require('mongoose');

// connect('mongodb://localhost/powdertrace', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;