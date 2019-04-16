const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes')

// const bodyParser=require('body-parser');
// const path = require("path");

const app = express();
const log = console.log;;

const PORT = process.env.PORT || 3001



// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname,'client','build','index.html'));
  // }
};

app.use('/', routes)

// // Define API routes here

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  { useNewUrlParser: true }
)

app.listen(PORT, () => {
  log(`🌎 ==> API server now on port ${PORT}!`);
});
