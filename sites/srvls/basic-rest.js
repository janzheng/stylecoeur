// https://medium.freecodecamp.org/create-a-simple-rest-api-endpoint-using-webtask-io-d9607fc00c17

// parse object to string and write the respose
var writeJSON = function( res, obj ) {
  var objJSON;
  // is an object 
  // yes: parse to a string
  // if not, set it to empty object
  if(typeof(obj) === 'object') {
    objJSON = JSON.stringify(obj);
  } else {
    objJSON = '{}';
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write( objJSON );
}

module.exports = 
  function (ctx, req, res) {
    // write the header and set the response type as a json
    res.writeHead(200, { 'Content-Type': 'application/json' });

    switch(req.method ){
      case 'GET':
        writeJSON(res, {error: 'GET method not implemented'});
      break;
      case 'POST':
        writeJSON(res, {error: 'POST method not implemented'});
      break;
      case 'DELETE':
        writeJSON(res, {error: 'DELETE method not implemented'});
      break;
      case 'PUT':
        writeJSON(res, {error: 'PUT method not implemented'});
      break;
    }

    res.end();
  }
  