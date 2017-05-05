//this is the elevenizer function
module.exports = function (n, cb) {
  setTimeout(function () {
    cb(null, n*111)
  }, 500)
}
