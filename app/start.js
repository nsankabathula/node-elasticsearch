const esconnection = require('./src/esconnections');
const args = require('yargs').argv;
const esclient = require('./src/index');


//console.log('Args', args);
const script = (args.script) ? args.script : null;
console.log('Script', script);

switch (script) {

  case 'ping': esclient.ping(esconnection, args); break;
  case 'info': esclient.info(esconnection, args); break;
  case 'index-info': esclient.index_info(esconnection, args); break;
  case 'create-index': esclient.create_index(esconnection, args); break;
  case 'delete-index': esclient.delete_index(esconnection, args); break;
  case 'bulk': esclient.bulk(esconnection, args); break;
  case 'bulk-stream': esclient.bulk_stream(esconnection, args); break;
  default: console.error('script not found...');
    break;
}





