let express = require('express')();

let PouchDB = require('pouchdb');
let Server = require('express-pouchdb');

express.use(Server(PouchDB.defaults({adapter: 'memory'})));

express.listen(5984);