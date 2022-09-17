const MongoClient = require("mongodb").MongoClient;

const URL =
  "mongodb+srv://princedemo:princemongodb@cluster0.vakumzs.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL, function (error) {
  if (error) {
    console.log("Connection fail");
  } else {
    console.log("Connection Succes");
  }
});

// If get useUnifiedTopology Error

/* 
const MongoClient = require("mongodb").MongoClient;

const URL =
  "mongodb+srv://princedemo:princemongodb@cluster0.vakumzs.mongodb.net/?retryWrites=true&w=majority";

const config = {useUnifiedTopology: true}

MongoClient.connect(URL, config, function (error) {
  if (error) {
    console.log("Connection fail");
  } else {
    console.log("Connection Succes");
  }
});

*/
