var https = require('https');


function getAndPrintHTML() {

  var allChunks = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function(response) {


  // response.setEncoding('utf8');

  response.on('data', function (data) {
    allChunks += 'Chunk Received. Length:'+ data.length + data + '\n';
      console.log(allChunks);
  });


  // response.on('end', function() {
  //   console.log('Response stream complete.');
  // });

});




  /* Add your code here */

}
getAndPrintHTML();
