const isStream = require('is-stream')
const path = require('path')
const url = require('url')

module.exports = handler

// create an http listener handler
// obj -> fn
function handler (router) {
  return function (req, res) {
    var pathname = url.parse(req.url).pathname
    pathname = pathname === '/' ? '/index.html' : pathname
    const ext = path.extname(pathname)

    console.log(JSON.stringify({url: pathname, type: 'static'}))

    if (ext === '.css') res.setHeader('Content-Type', 'text/css')
    if (ext === '.js') res.setHeader('Content-Type', 'application/javascript')

    router.match(pathname, function (err, body) {
      if (err) {
        err = (typeof err === 'object') ? err.toString() : err
        console.log(JSON.stringify({
          level: 'error',
          url: pathname,
          message: err
        }))
      }
      if (isStream(body)) return body.pipe(res)
      res.end(body)
    })
  }
}
