//========================================
// fs read file
//========================================

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    Asynchronus;
    fs.readFile("Home.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    Synchronus;
    var myData = fs.readFileSync("Home.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(myData);
    res.end();
  }
});
server.listen(6060);
console.log("server is running..");

//========================================
// fs File Write Async
//========================================

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    fs.writeFile("Demo.txt", "Hello World", function (error) {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File write failed");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File write success");
        res.end();
      }
    });
  }
});

server.listen(6060);
console.log("......");

//========================================
// fs File Write Sync
//========================================

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    var error = fs.writeFileSync("DemoSync.txt", "Sync Process");

    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File write failed");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File write success");
      res.end();
    }
  }
});

server.listen(6060);
console.log("---------");

//========================================
//fs File Rename Async
//========================================

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    fs.rename("rename.txt", "rename_new.txt", function (error) {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File rename failed");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File write success");
        res.end();
      }
    });
  }
});

server.listen(6060);
console.log("---------");

//========================================
//fs File Rename Sync
//========================================
var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    var error = fs.renameSync("renameSyncNew.txt", "renameSyncNewNew.txt");

    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File rename failed");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File rename success");
      res.end();
    }
  }
});

server.listen(6060);
console.log("---------");

// ========================================
//fs File Delete Async
// ========================================
var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.unlink("delete.txt", function (error) {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File delete failed");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File delete success");
        res.end();
      }
    });
  }
});

server.listen(6060);
console.log("---------");

// ========================================
//fs File Delete Sync
// ========================================

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    var error = fs.unlinkSync("deleteSyncsss.txt");

    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File delete failed");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File delete success");
      res.end();
    }
  }
});

server.listen(6060);
console.log("---------");

// ========================================
//fs File Exists Sync
// ========================================

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    var result = fs.existsSync("Demo.txt");

    if (result) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File exists");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File doesn't exist");
      res.end();
    }
  }
});

server.listen(6060);
console.log("---------");
