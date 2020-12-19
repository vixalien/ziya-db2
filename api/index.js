let express = require('express')();

let PouchDB = require('pouchdb');
let Server = require('express-pouchdb');

express.use(Server(PouchDB));

express.listen(5984);