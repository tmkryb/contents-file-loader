const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const url = loaderUtils.interpolateName(this, "[name].[ext]", {
    content,
  });

  this.emitFile(url, content);

  return `
  var request = require('sync-request');
  var fileContent;
  export default fileContent ? fileContent : fileContent = JSON.parse(request('GET', '${url}').getBody())`;
};