# brick-server
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create an http handler for
[`brick-router`](https://github.com/yoshuawuyts/brick-router).
Sends out [ndjson](ndjson.org) events. Works well with 
[opnr](https://github.com/mattdesl/opnr) and 
[garnish](https://github.com/mattdesl/garnish).

## Installation
```bash
$ npm install brick-server
```

## Usage
```js
const brickRouter = require('brick-router')
const brickServer = require('brick-server')
const http = require('http')

const router = brickRouter()

// streams
router.on('/index.html', (cb) => {
  const loc = path.join(__dirname, 'index.html')
  const stream = fs.createReadStream(loc)
  cb(null, stream)
})

// strings
router.on('/index.css', (cb) => {
  const css = `
    .foo {
      color: blue;
    }
  `
  cb(null, css)
})

const handler = brickServer(router.match)
const server = http.createServer(handler)
server.listen(1337)
```

## See Also
- [brick-router](https://github.com/yoshuawuyts/brick-router) - modular router for serving static assets 
- [opnr](https://github.com/mattdesl/opnr) - launches the browser when ndjson criteria is met
- [garnish](https://github.com/mattdesl/garnish) - prettifies ndjson from wzrd and similar tools

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/brick-server.svg?style=flat-square
[npm-url]: https://npmjs.org/package/brick-server
[travis-image]: https://img.shields.io/travis/yoshuawuyts/brick-server.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/brick-server
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/brick-server.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/brick-server?branch=master
[downloads-image]: http://img.shields.io/npm/dm/brick-server.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/brick-server
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
