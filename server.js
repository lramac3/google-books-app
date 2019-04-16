const express = require("express");
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const path = require("path");

const app = express();
const log = console.log;;

const routes = require('./routes');

const app=express()
const PORT = process.env.PORT || 3001

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/my_database',
//   { useNewUrlParser: true }
// )

// Define middleware here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname,'client','build','index.html'));
  // }
};

// // Define API routes here

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  log(`🌎 ==> API server now on port ${PORT}!`);
});
