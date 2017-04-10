var https = require('https');


function getAndPrintHTML() {

  var allChunks = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function(response) {


  response.setEncoding('utf8');

  response.on('data', function (data) {
    allChunks += 'Chunk Received. Length:'+ data.length + data + '\n';
  });

  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(allChunks);
  });


});




  /* Add your code here */

}
getAndPrintHTML();
