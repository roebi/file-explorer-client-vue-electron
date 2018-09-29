var FileExplorer = require('file_explorer');

var api = new FileExplorer.FileApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
module.exports = function () { api.listFiles(callback) };
