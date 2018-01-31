const fs = require('fs');
var bulk_data = [];
const jsonConfig = ["a","b"];


var prepDataForBulk = function (list, esindex, estype, callback){
    list.forEach((element, index) => {
        let tmp = {}
        jsonConfig.forEach((value)=>{
            tmp[value] = element[value];
        });

        bulk_data.push(
            { index: {_index: esindex, _type: estype, _id: index } },
            tmp
          );
    });
    callback(bulk_data);
}
var importData = function (esconnection, data, index, type, callback){
    esconnection.bulk({
        maxRetries: 5,
        index: index,
        type: type,
        body: data
      },function(err,resp,status) {
          if (err) {
            console.log(err);
          }
          else {
            callback(resp.items);
          }
      })
}
var bulk = function (esconnection, args, callback){  
        //console.info('Ping response', resp);
        //console.log('args: ' , args);         
        // --index= --type= --file=
        const index = args.index;
        const type = args.type;
        const filePath = args.filePath;
        //const data = require('../data/data.json')
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        //console.log(data);
        
        
        prepDataForBulk(data,index, type, function(bulkdata){
            importData(esconnection, bulkdata, index, type, function(response){
                console.log('Response', response);
            })
        });
        
        
    }

    


module.exports = bulk;