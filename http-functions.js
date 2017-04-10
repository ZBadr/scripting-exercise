module.exports = function getHTML (options, callback) {
var https = require('https');
var allChunks = "";

https.get(options, function(response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    allChunks += 'Chunk Received. Length:'+ data.length + data + '\n';
  });

  response.on('end', function() {
    console.log('Response stream complete.');
    callback(allChunks);

  });

});
}