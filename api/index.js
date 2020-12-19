let express = require('express')();

let PouchDB = require('pouchdb');
let Server = require('express-pouchdb');

PouchDB.plugin(require('pouchdb-adapter-memory'));
express.use(Server(PouchDB.defaults({adapter: 'memory'})));

express.listen(5984);