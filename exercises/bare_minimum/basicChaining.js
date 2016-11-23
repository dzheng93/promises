/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */


// promiseConstructor - pluckFirstLineFromFileAsync
// promisification - getGitHubProfileAsync
// 
// get response and write the json response

var fs = require('fs');
var Promise = require('bluebird');
var git = require('./promisification');
var pluck = require('./promiseConstructor'); 

var write = function(writeFilePath, jsonData) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(writeFilePath, JSON.stringify(jsonData), function(err) {
      if (err) { 
        reject(err); 
      } else { 
        resolve(); 
      }
    });
  });
};

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return pluck.pluckFirstLineFromFileAsync(readFilePath)
  .then(git.getGitHubProfileAsync)
  .then(write.bind(null, writeFilePath));
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
