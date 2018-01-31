var elasticsearch=require('elasticsearch');
const esconfig = require('../config/esconnection.json');

var esclient = new elasticsearch.Client( {  
  /*hosts: [
    'https://[username]:[password]@[server]:[port]/',
    'https://[username]:[password]@[server]:[port]/'
  ]*/
  host: esconfig.host,
  log: esconfig.log
});

module.exports = esclient; 