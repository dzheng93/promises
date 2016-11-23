/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf-8', function(error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results.split('\n')[0]);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {

  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(response.statusCode);
      }
    });
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};


// var someOtherFunction = function (arg) {

// };

// pluckFirstLineFromFileAsync('somePath').then(someOtherFunction)


// var Promise = function() {
//   this.resolveValue = null;
// };

// Promise.prototype.then = function(cb) {
//   cb.call(null, this.resolveValue);
// };


// readAsync('path', function(err, data) {
//   someotherAsyncFunc('something', function(err, data) {
//     yetAnotherAsyncFunc('blah', function(err, data) {
//       onemoreFunc('lksd', function(err, data) {

//       });
//     });
//   });
// });

// // OR

// readAsync(sks)
// .then(someotherAsyncFunc)
// .then(yetAnotherAsyncFunc)
// .then(onemoreFunc)