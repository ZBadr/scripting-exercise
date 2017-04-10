var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
