var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

var allChunks = "";

https.get(options, function(response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    allChunks += 'Chunk Received. Length:'+ data.length + data + '\n';
  });

  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(allChunks);

  });

});

}
getAndPrintHTML(requestOptions);
