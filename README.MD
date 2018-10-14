<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

A very simple file loader module for webpack, that returns file contents

## Requirements

This module was tested with webpack 4.2.0 and higher

## Getting Started

To begin, you'll need to install `contents-file-loader`:

```console
$ npm install contents-file-loader --save-dev
```

Import (or `require`) the target file(s) in one of the bundle's files:

```js
// bundle file
import config from './file.json'
```

Then add the loader to your `webpack` config. For example:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/, 
        type: 'javascript/auto',               
          use: [
           {         
            loader: "contents-file-loader",                        
           }                   
        ]
      }
    ]
  }
}
```

You could also specify the name of emitted file:
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/, 
        type: 'javascript/auto',               
          use: [
           {         
            loader: "contents-file-loader",
            options: {
               name: "[hash].[ext]"
             }                        
           }                   
        ]
      }
    ]
  }
}
```

And run `webpack` via your preferred method. This will emit `file.json` as a file
in the output directory and returns contents of the file.

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/file-loader.svg
[npm-url]: https://npmjs.com/package/file-loader

[node]: https://img.shields.io/node/v/file-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/file-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/file-loader

[tests]: 	https://img.shields.io/circleci/project/github/webpack-contrib/file-loader.svg
[tests-url]: https://circleci.com/gh/webpack-contrib/file-loader

[cover]: https://codecov.io/gh/webpack-contrib/file-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/file-loader

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack