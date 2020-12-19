let express = require('express')();

// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 

let PouchDB = require('pouchdb');
let Server = require('express-pouchdb');

PouchDB.plugin(require('pouchdb-adapter-memory'));
express.use(Server(PouchDB.defaults({adapter: 'memory'})));

express.listen(5984);