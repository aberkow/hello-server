var express = require('express');

var app = express();

// app.get('/', function(request, response){
//   response.send("Hello world!");
// });

app.get('/headers', function(request, response){
  response.send(request.headers);
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

app.listen(8080, function(){
  console.log('App listening on port 8080!');
});
