const app = require('./app')
const mongoose = require('mongoose');


const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  })
  .catch(() => {
    console.log("error");
    process.exit(1)
  })


