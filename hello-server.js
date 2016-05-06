var express = require('express');

var app = express();

// app.get('/', function(request, response){
//   response.send("Hello world!");
// });

app.get('/headers', function(request, response){
  console.log(request.headers);
  response.send(request.headers);
});

app.get('/headers/:header_name', function(request, response){
  var headerObj = request.headers;
  var headerObjVal = headerObj[request.params.header_name];
  response.send(headerObjVal);
});

app.get('/version', function(request, response){
  var version = request.version;
  console.log(request.version);
  response.send(version.httpVersion);
});

app.get('/:jedi/:firstName/:lastName', function(request, response){
  var first = request.params.firstName;
  var last = request.params.lastName;
  var jedi = function(firstName, lastName){
    var jediFirstName = firstName.substring(0, 2);
    var jediLastName = lastName.substring(0, 3);
    return jediLastName + jediFirstName;
  }
  response.send("Hello " + jedi(first, last));


});

app.listen(4000, 'localhost', function(){
  console.log('App listening on port 4000!');
});
