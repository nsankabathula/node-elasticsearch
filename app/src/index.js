var bulk = require('./bulk');

var ping = function (esclient, args, callback)
{
    esclient.ping
    ({body:'Angular connecting to elasticsearch....'},
    function(err,resp,status) { 
    }
    );
}

var cluster_info = function (esclient, args, callback){
    esclient.cluster.health({},function(err,resp,status) {  
        console.log("-- Cluster Health --");           
        console.info(resp);
        console.log("-- End --");           
      });
}

var indicies = function (esclient, args, callback){
    esclient.cat.indices({format:'json'}, function (ierr, iresp, istatus){
        console.log("-- Indicies --");     
        console.info(iresp);
        console.log("-- End --");     
    })
}

var create_index = function (esclient, args, callback){
    if(args && args['index'])
    { 
        const indexName = args.index;
        esclient.indices.create(
            {index:indexName}, function (err, resp, status){
                console.log("-- Create Index --");     
                console.info(resp);
                console.log("-- End --");    
            }
        );
    }
    else {
        console.error('Args empty...', args);
    }
}

var delete_index = function (esclient, args, callback){
    if(args && args['index'])
    { 
        const indexName = args.index;
        esclient.indices.delete(
            {index:indexName}, function (err, resp, status){
                console.log("-- Delete Index --");     
                console.info(resp);
                console.log("-- End --");    
            }
        );
    }
    else {
        console.error('Args empty...', args);
    }
}


//module.exports = ping;
module.exports.ping = ping;
module.exports.info = cluster_info;
module.exports.index_info = indicies;
module.exports.create_index = create_index;
module.exports.delete_index = delete_index;
module.exports.bulk = bulk;
