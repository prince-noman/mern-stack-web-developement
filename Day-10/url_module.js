/*
============
URL Module
============
*/

const http = require("http");
const URL = require("url");

var server = http.createServer(function (req, res) {
  //Storing URL in variable. "http://" is a must before url.
  var myURL = "http://google.com/home.html?year=2020&month=july";

  //Spliting URL
  var myURLObj = URL.parse(myURL, true);

  //Storing splited parts in variable
  var myHostName = myURLObj.host;
  var myPathName = myURLObj.pathname;
  var mySearchName = myURLObj.search;

  //writing response
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write(myHostName);
  //   res.write(myPathName);
  res.write(mySearchName);
  res.end();
});

server.listen(6061);
console.log("Server Running...");
