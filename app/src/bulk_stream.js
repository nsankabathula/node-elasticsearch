const parse = require('json-parse-stream');
const estream = require('event-stream');
const fs = require('fs');

var writeBulk = require('elasticsearch-streams').WritableBulk;
var transformToBulk = require('elasticsearch-streams').TransformToBulk;

var bulk_stream = function (esconnection, args, callback) {
    if (args && args['index'] && args['type'] && args['filePath']) {
        const index = args.index;
        const type = args.type;
        const filePath = args.filePath;

        var toBulk = new transformToBulk(() => { return { _index: index, _type: type }; });

        var bulkExec = function (body, callback) {
            //console.log(body);
            esconnection.bulk({
                index: index,
                type: type,
                body: body
            }, callback);
        };

        var done = function (err, res) {
            if (err) {
                console.error(err);
            }
            console.log(res);
            console.log('go get a drink you deserve it');
        };


        var ws = new writeBulk(bulkExec);

        const rs = fs.createReadStream(filePath);

        rs.pipe(parse())
            .pipe(estream.mapSync(function (element) {
                var a = [];
                if (element.type === 'object') {// && Object.typeof(element.value)
                    a = element.value;
                    //console.log('a', a);
                    return a;
                }
            }))

            .pipe(toBulk)
            .pipe(ws)
            .on('finish', done);
    }
    else {
        console.error('Args empty/incomplete...', args);
    }

}

module.exports = bulk_stream;