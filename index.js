const loaderUtils = require("loader-utils");

module.exports = function(content) {
  
  const options = loaderUtils.getOptions(this) || {};

  if(!options.name){
    options.name = "[name]_[hash].[ext]"
  }
  
  const url = loaderUtils.interpolateName(this, options.name, {
    content,
  });

  this.emitFile(url, content);

  return `
  var request = require('sync-request');
  var fileContent;
  export default fileContent ? fileContent : fileContent = JSON.parse(request('GET', '${url}').getBody())`;
};