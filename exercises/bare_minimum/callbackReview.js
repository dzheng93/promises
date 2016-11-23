/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(error, results) {
    if (results) {
      var fileLines = results.split('\n');
      var firstLine = fileLines[0];
      callback(error, firstLine);
    } else {
      callback(error);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(error, response, body) {
    if (response) {
      callback(error, response.statusCode);
    } else {
      callback(error);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
